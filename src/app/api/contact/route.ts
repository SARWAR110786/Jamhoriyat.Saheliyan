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

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] delivery failed", err);
      return NextResponse.json(
        {
          ok: false,
          error: `We could not deliver your message. Please email ${
            process.env.CONTACT_INBOX ?? "hello@jamhooriyatsaheliyan.org"
          } directly.`,
        },
        { status: 502 },
      );
    }
  } else {
    // No transport configured. In production, refuse the message rather than
    // accept it and lose it: a silent "sent" would be a lie to the sender.
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[contact] CONTACT_WEBHOOK_URL is not set; refusing a message that cannot be delivered",
      );
      return NextResponse.json(
        {
          ok: false,
          error: `Our contact form is not connected yet. Please email ${
            process.env.CONTACT_INBOX ?? "hello@jamhooriyatsaheliyan.org"
          } directly.`,
        },
        { status: 503 },
      );
    }

    // Development: keep the UX working and log the message instead.
    console.info("[contact] no CONTACT_WEBHOOK_URL set; message logged only", {
      ...record,
      message: `${message.slice(0, 200)}${message.length > 200 ? "…" : ""}`,
    });
  }

  return NextResponse.json({ ok: true });
}
