import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * The brief (p.8) requires server-side validation, spam protection and that
 * messages go to an official inbox rather than being stored in plain text.
 *
 * This handler validates, rejects bots via a honeypot, and forwards the
 * message to whatever is configured in the environment:
 *
 *   CONTACT_WEBHOOK_URL   — Slack/Teams/n8n webhook, or your own mail relay
 *   CONTACT_INBOX         — fallback address printed in the server log
 *
 * Nothing is written to disk. Wire CONTACT_WEBHOOK_URL to Resend, Postmark,
 * a form service, or the team's official inbox before launch.
 */

type Payload = {
  name?: string;
  email?: string;
  organisation?: string;
  reason?: string;
  message?: string;
  consent?: boolean;
  website?: string;
  kind?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Very small in-memory throttle. Replace with a shared store (Redis/Upstash)
// if you deploy to more than one instance.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const clean = (v: unknown, max = 4000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";


/* ── Email notification through the Hostinger Mail API ─────────────────────
 * Sends each message from info@jamhoriyatsaheliyan.com to the team inboxes.
 * Configure on the server (never in the browser):
 *   MAIL_API_TOKEN   Hostinger Mail API token scoped to the info@ mailbox
 *   MAIL_MAILBOX_ID  optional; looked up from the token when missing
 *   NOTIFY_TO        comma-separated recipients
 *   NOTIFY_CC        optional comma-separated copies
 */
const MAIL_API = "https://api.mail.hostinger.com/api/v1";
let cachedMailboxId: string | null = null;

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const list = (v?: string) =>
  (v ?? "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

async function mailboxId(token: string) {
  if (process.env.MAIL_MAILBOX_ID) return process.env.MAIL_MAILBOX_ID;
  if (cachedMailboxId) return cachedMailboxId;
  const res = await fetch(`${MAIL_API}/me`, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error(`Mail API /me responded ${res.status}`);
  const data = (await res.json()) as Record<string, unknown>;
  const boxes = (data.mailboxes ?? (data.data as Record<string, unknown>)?.mailboxes ?? data.data ?? []) as Array<
    Record<string, unknown>
  >;
  const first = Array.isArray(boxes) ? boxes[0] : undefined;
  const id = (first?.resourceId ?? first?.resource_id ?? first?.id) as string | undefined;
  if (!id) throw new Error("Mail API /me returned no mailbox");
  cachedMailboxId = id;
  return id;
}

async function sendNotification(record: {
  kind: string;
  name: string;
  email: string;
  organisation: string;
  reason: string;
  message: string;
  receivedAt: string;
}) {
  const token = process.env.MAIL_API_TOKEN;
  const to = list(process.env.NOTIFY_TO);
  if (!token || to.length === 0) return false;

  const id = await mailboxId(token);
  const label = record.kind === "partner" ? "Partner enquiry" : "Contact message";
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px">
      <h2 style="color:#be185d;margin:0 0 12px">${label} from jamhoriyatsaheliyan.com</h2>
      <p style="margin:0 0 4px"><b>Name:</b> ${esc(record.name)}</p>
      <p style="margin:0 0 4px"><b>Email:</b> <a href="mailto:${esc(record.email)}">${esc(record.email)}</a></p>
      <p style="margin:0 0 4px"><b>Organisation:</b> ${esc(record.organisation || "-")}</p>
      <p style="margin:0 0 12px"><b>About:</b> ${esc(record.reason || "-")}</p>
      <div style="background:#fff3f8;border-radius:10px;padding:14px;white-space:pre-wrap">${esc(record.message)}</div>
      <p style="color:#888;font-size:12px;margin-top:14px">To reply, write to ${esc(record.email)}. Received ${esc(record.receivedAt)}.</p>
    </div>`;

  const res = await fetch(`${MAIL_API}/mailboxes/${encodeURIComponent(id)}/send`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      to,
      cc: list(process.env.NOTIFY_CC),
      displayName: "Jamhooriyat Saheliyan Website",
      subject: `${label}: ${record.name}`,
      html,
      text: `${label}\nName: ${record.name}\nEmail: ${record.email}\nOrganisation: ${record.organisation || "-"}\nAbout: ${record.reason || "-"}\n\n${record.message}`,
    }),
  });
  if (!res.ok) throw new Error(`Mail API send responded ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages from this connection. Please try again later." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see this field.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const organisation = clean(body.organisation, 200);
  const reason = clean(body.reason, 200);
  const message = clean(body.message, 4000);
  const consent = body.consent === true;

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write a little more.";
  if (!consent) errors.consent = "Please confirm you agree to be contacted.";

  if (Object.keys(errors).length) {
    return NextResponse.json(
      { ok: false, error: Object.values(errors)[0], errors },
      { status: 422 },
    );
  }

  const record = {
    kind: clean(body.kind, 20) || "contact",
    name,
    email,
    organisation,
    reason,
    message,
    consent,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const inbox = process.env.CONTACT_INBOX ?? "info@jamhoriyatsaheliyan.com";
  const canEmail = Boolean(process.env.MAIL_API_TOKEN && process.env.NOTIFY_TO);

  if (!webhook && !canEmail) {
    // No transport configured. In production, refuse the message rather than
    // accept it and lose it: a silent "sent" would be a lie to the sender.
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] no delivery configured; refusing a message that cannot be delivered");
      return NextResponse.json(
        { ok: false, error: `Our contact form is not connected yet. Please email ${inbox} directly.` },
        { status: 503 },
      );
    }
    console.info("[contact] no delivery configured; message logged only", {
      ...record,
      message: `${message.slice(0, 200)}${message.length > 200 ? "…" : ""}`,
    });
    return NextResponse.json({ ok: true });
  }

  // Deliver through every configured channel. The message counts as delivered
  // if at least one channel accepted it (n8n stores it; email notifies the team).
  const results = await Promise.allSettled([
    webhook
      ? fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        }).then((res) => {
          if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
          return true;
        })
      : Promise.resolve(false),
    canEmail ? sendNotification(record) : Promise.resolve(false),
  ]);

  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[contact] ${i === 0 ? "webhook" : "email"} failed`, r.reason);
  });

  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);
  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: `We could not deliver your message. Please email ${inbox} directly.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
