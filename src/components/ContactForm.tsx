"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const reasons = [
  "Funding or climate finance",
  "UN agency or development organisation",
  "Research or evaluation",
  "Technology or AI-for-good partnership",
  "Feminist or civic tech network",
  "Media or press",
  "Something else",
];

export default function ContactForm({
  variant = "partner",
}: {
  variant?: "partner" | "contact";
}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    organisation: "",
    reason: reasons[0],
    message: "",
    consent: false,
    /** Honeypot — hidden from humans, filled by bots. */
    website: "",
  });

  const update = (k: keyof typeof fields, v: string | boolean) =>
    setFields((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, kind: variant }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setError("We could not reach the server. Please try again, or email us directly.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5 10 17.5 19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ivory">Message received.</h3>
        <p className="mx-auto mt-2 max-w-sm text-[0.9rem] leading-relaxed text-ivory/60">
          Thank you. We collect only what is needed to respond, and we usually reply within three
          working days.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="btn btn-ghost mt-6 !py-2.5 !text-xs"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          required
          value={fields.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
        />
        <Field
          label="Email"
          id="email"
          type="email"
          required
          value={fields.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
        />
      </div>

      <Field
        label="Organisation"
        id="organisation"
        value={fields.organisation}
        onChange={(v) => update("organisation", v)}
        autoComplete="organization"
        hint="Optional"
      />

      <div>
        <label
          htmlFor="reason"
          className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-orchid-light"
        >
          {variant === "partner" ? "How you would like to work together" : "Reason for contact"}
        </label>
        <select
          id="reason"
          value={fields.reason}
          onChange={(e) => update("reason", e.target.value)}
          className="mt-2 w-full appearance-none rounded-xl border border-rose/20 bg-plum-deep/60 px-4 py-3 text-[0.92rem] text-ivory outline-none transition-colors focus:border-orchid"
        >
          {reasons.map((r) => (
            <option key={r} value={r} className="bg-plum-deep">
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-orchid-light"
        >
          Message <span className="text-pink">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you would like to build, fund or learn together."
          className="mt-2 w-full resize-y rounded-xl border border-rose/20 bg-plum-deep/60 px-4 py-3 text-[0.92rem] leading-relaxed text-ivory placeholder:text-ivory/50 outline-none transition-colors focus:border-orchid"
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-[0.8rem] leading-relaxed text-ivory/60">
        <input
          type="checkbox"
          required
          checked={fields.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-pink"
        />
        <span>
          I agree that Jamhooriyat Saheliyan may use these details to respond to my message. We do
          not sell or share your details.{" "}
          <span className="text-pink" aria-hidden>
            *
          </span>
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-pink/30 bg-pink/10 px-4 py-3 text-[0.85rem] text-rose"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-pink w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-center text-[0.7rem] leading-relaxed text-ivory/60">
        Fields marked * are required. We collect only what is needed to respond.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required = false,
  hint,
  autoComplete,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-orchid-light"
      >
        {label} {required ? <span className="text-pink">*</span> : hint && <span className="normal-case tracking-normal text-ivory/60">({hint})</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-rose/20 bg-plum-deep/60 px-4 py-3 text-[0.92rem] text-ivory placeholder:text-ivory/50 outline-none transition-colors focus:border-orchid"
      />
    </div>
  );
}
