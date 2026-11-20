import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppMock from "@/components/WhatsAppMock";
import CTABand from "@/components/CTABand";
import { Status } from "@/components/Tbc";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/technology");

const languages = site.languages;

export default function TechnologyPage() {
  return (
    <>
      <PageSchema path="/technology" />
      <PageHero
        eyebrow="Our technology"
        title={
          <>
            A phone she already owns. A question she is allowed to ask.
          </>
        }
        intro="Jamhooriyat Saheliyan is a WhatsApp-based support service that helps rural women in Sindh understand public information and make Right to Information (RTI) requests. This page describes exactly what the service does today — and what it does not."
      >
        <div className="flex flex-wrap items-center gap-3">
          {site.whatsappLink ? (
            <>
              <a
                href={site.whatsappLink}
                className="btn btn-pink"
                rel="noopener noreferrer"
                target="_blank"
              >
                Message {site.whatsappNumber} on WhatsApp
                <span className="ml-1 inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider">
                  Live
                </span>
              </a>
              <a href="#privacy" className="btn btn-ghost">
                Read the privacy note
              </a>
            </>
          ) : (
            <span
              className="btn cursor-not-allowed border border-dashed border-rose/30 bg-rose/5 text-rose/70"
              aria-disabled="true"
              title="The verified WhatsApp number is supplied by the team before launch"
            >
              WhatsApp number to be confirmed
            </span>
          )}
        </div>
        {site.liveLanguages && (
          <p className="mt-4 text-[0.78rem] text-ink/65">
            Working today in {site.liveLanguages.join(", ")}. Free to message from any phone with
            WhatsApp.
          </p>
        )}
      </PageHero>

      {/* What it is */}
      <section className="on-light py-20 md:py-24">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                k: "What it is",
                v: "A WhatsApp-based service that answers questions about public information and explains how to make a Right to Information request.",              },
              {
                k: "Who it is for",
                v: "Rural women in Sindh who want to ask a public institution a question, and the community facilitators who support them.",
              },
              {
                k: "How to access it",
                v: "Message the official number from any phone with WhatsApp. No app to install and no account to create.",
              },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 0.08}>
                <div className="card-light h-full p-7">
                  <p className="eyebrow text-violet">{c.k}</p>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/72">{c.v}</p>
                  {c.k === "How to access it" && site.whatsappLink && (
                    <p className="mt-4 rounded-lg bg-violet/6 p-3 text-[0.78rem] leading-relaxed text-violet ring-1 ring-inset ring-violet/15">
                      Message{" "}
                      <a
                        href={site.whatsappLink}
                        className="font-semibold underline underline-offset-2"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {site.whatsappNumber}
                      </a>{" "}
                      — the number is live today in English, Urdu and Sindhi.
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + sample */}
      <section className="relative overflow-hidden bg-plum py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-pink/10 blur-[140px]"
        />
        <div className="shell relative z-10">
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="How it works"
                  title="Four steps, each labelled honestly."
                  intro="Every step says whether it works today or is still being built. Live today means you can use it now. In development means we are testing it and will label it live only when it works."
                />
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-8 rounded-2xl border border-rose/15 bg-plum-soft/35 p-5">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                    Right to Information, in plain words
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/70">
                    Sindh has a law that lets any citizen ask a government office for information it
                    holds — budgets, contracts, school records, water and health plans. The office is
                    expected to answer. You do not need a lawyer, a contact or a computer. This
                    service helps you ask clearly, and tells you where to send the request.
                  </p>
                </div>
              </Reveal>

              <ol className="mt-8 space-y-3">
                {[
                  {
                    n: "01",
                    t: "Ask a question",
                    d: "In a familiar language, in plain words. A voice note can be used where typing is hard.",
                    s: "live" as const,
                  },
                  {
                    n: "02",
                    t: "Get guidance and information",
                    d: "The service explains what public information exists and names the office that holds it.",
                    s: "live" as const,
                  },
                  {
                    n: "03",
                    t: "Understand the next step",
                    d: "Including how to draft and submit a Right to Information request, and what a reply should contain.",
                    s: "live" as const,
                  },
                  {
                    n: "04",
                    t: "Take part in accountability",
                    d: "Follow-up with the responsible institution, alone or with other women in the civic network.",
                    s: "dev" as const,
                  },
                ].map((step, i) => (
                  <Reveal key={step.n} delay={i * 0.06}>
                    <li className="group flex gap-5 rounded-2xl border border-rose/10 bg-plum-soft/35 p-5 transition-colors hover:border-orchid/35 hover:bg-plum-soft/60">
                      <span className="mt-0.5 font-display text-[0.72rem] font-bold tracking-[0.16em] text-orchid-light">
                        {step.n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                            {step.t}
                          </h3>
                          <Status state={step.s} />
                        </div>
                        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/65">
                          {step.d}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={0.15} y={26}>
              <div className="lg:sticky lg:top-28">
                <WhatsAppMock />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Languages and formats */}
      <section className="on-ivory-warm py-20 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal className="min-w-0">
              <SectionHeading
                eyebrow="Languages and formats"
                tone="light"
                title="English, Urdu and Sindhi — live today."
                intro="All three languages work in the live WhatsApp service. Urdu and Sindhi are written right to left. We list a language as live only when a real conversation works in it."
              />
            </Reveal>

            <Reveal delay={0.1} className="min-w-0">
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <table className="w-full table-fixed text-left">
                  <caption className="sr-only">Language availability</caption>
                  <thead>
                    <tr className="border-b border-ink/10 bg-ink/4 text-[0.66rem] uppercase tracking-[0.14em] text-ink/65">
                      <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                        Language
                      </th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {languages.map((l) => (
                      <tr key={l.code} className="border-b border-ink/6 last:border-0">
                        <td className="px-4 py-4 text-[0.92rem] font-medium text-ink sm:px-5">
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            {l.name}
                            <span className="rounded bg-ink/6 px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wider text-ink/65">
                              {l.dir === "rtl" ? "RTL" : "LTR"}
                            </span>
                          </span>
                          <span className="mt-0.5 block text-[0.74rem] font-normal text-ink/65">
                            {l.dir === "rtl" ? "Right to left" : "Left to right"}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right sm:px-5">
                          <Status state={l.status === "live" ? "live" : "dev"} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-ink/65">
                Text is the only format confirmed today. Voice notes, translation quality and
                dialect coverage are still being tested — they are listed only once verified.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Can / cannot */}
      <section className="bg-plum-deep py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Honest limits"
              title="What it can help with — and what it cannot do."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-7">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-emerald-800">
                  <Check /> It can help you
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Understand what public information exists and who holds it.",
                    "Frame a clear question for a public office.",
                    "Draft a Right to Information request and explain the process.",
                    "Know what a reply should contain, and what to do if it does not come.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[0.94rem] leading-relaxed text-ink/70">
                      <Check className="mt-1 shrink-0 text-emerald-700/80" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-rose/25 bg-rose/5 p-7">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-rose">
                  <Cross /> It cannot
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Replace legal advice. For a legal matter, consult a lawyer.",
                    "Guarantee that a government office will reply, or reply on time.",
                    "File a request on your behalf or represent you.",
                    "Access private records that the law does not make public.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[0.94rem] leading-relaxed text-ink/70">
                      <Cross className="mt-1 shrink-0 text-rose/70" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[0.8rem] leading-relaxed text-ink/60">
              The service lowers a barrier; it does not remove structural inequality. Institutions
              still have a duty to answer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="on-light scroll-mt-24 py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Privacy and safety"
                  tone="light"
                  title="Safety is a design decision, not a policy page."
                  intro="Women using this service may be sharing a phone, or asking about an institution that holds power over their household. That shapes every choice below."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex items-start gap-4 rounded-xl border border-violet/15 bg-violet/5 p-5">
                  <span className="mt-0.5 text-violet">
                    <Shield />
                  </span>
                  <p className="text-[0.86rem] leading-relaxed text-ink/70">
                    You can ask us to delete your data at any time, and you do not have to give a
                    reason. Write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-violet underline underline-offset-2"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  t: "What we collect",
                  d: "The messages you send, the language you use, and the district you tell us. Nothing else unless you choose to share it.",
                },
                {
                  t: "Where it is stored",
                  d: "On access-controlled systems with named administrators. Conversations are not sold, published or shared with advertisers.",
                },
                {
                  t: "Who can see it",
                  d: "A small, named support team. Access is logged and reviewed, and removed when someone leaves the team.",
                },
                {
                  t: "How long we keep it",
                  d: "For a defined retention period, then deleted. The exact period is confirmed in the privacy policy before launch.",
                },
                {
                  t: "Consent",
                  d: "You are told what the service is and what it is not before you use it, in plain language.",
                },
                {
                  t: "Escalation",
                  d: "Where a question needs a person, it is handed to a facilitator — never left with an automated reply.",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.05}>
                  <div className="card-light h-full p-5">
                    <h3 className="font-display text-[0.98rem] font-semibold text-ink">{c.t}</h3>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/65">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3 rounded-xl border border-ink/10 bg-ink/3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.82rem] leading-relaxed text-ink/65">
                The full privacy policy text is supplied by the team and published before launch.
              </p>
              <Link href="/privacy" className="btn btn-ghost-dark shrink-0 !py-2.5 !text-xs">
                Privacy and data protection
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo band */}
      <section className="bg-plum py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <Photo
                slot="techSupport"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Photo
                slot="techPhone"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <Photo
                slot="techDetail"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Next"
        title="See what the questions added up to."
        body="Two hundred women co-created the service. One hundred and twenty have used the Right to Information. Here is what we can verify."
      />
    </>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8.5 6.2 11.7 13 4.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Shield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 20 6v6.2c0 4.4-3.3 7.4-8 8.3-4.7-.9-8-3.9-8-8.3V6l8-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
