import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import NetworkCanvas from "@/components/NetworkCanvas";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <PageSchema path="/contact" />
      <section className="relative overflow-hidden bg-plum pb-16 pt-32 md:pt-40">
        <div aria-hidden className="absolute inset-0 opacity-40">
          <NetworkCanvas />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-20 h-[24rem] w-[24rem] rounded-full bg-pink/10 blur-[130px]"
        />
        <div className="shell relative z-10">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.2rem,5.4vw,3.8rem)] font-bold leading-[1.02] text-ink">
            Get help with a service, or talk to the team.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[1.06rem] leading-relaxed text-ink/65">
            If you need information from a government office, the fastest way is WhatsApp — it is
            free and live today. For partnership, media or research, use the form below.
          </p>
        </div>
      </section>

      {/* Primary path: service help */}
      <section className="bg-plum pb-4 md:pb-6">
        <div className="shell">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.10] via-plum-soft/45 to-plum-soft/25 p-6 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-800">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live today
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-bold leading-[1.1] text-ink">
                    I need help with a service
                  </h2>
                  <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-ink/72">
                    Message us on WhatsApp. It is free, there is no app to install and no account to
                    create. We reply in English, Urdu and Sindhi.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Tell us the district you are in and what you want to know.",
                      "You do not need to know which office to ask.",
                      "We never ask for your ID number, address or household details.",
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex gap-3 text-[0.9rem] leading-relaxed text-ink/70"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-emerald-700"
                        >
                          <path
                            d="M5 12.5 10 17.5 19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-rose/15 bg-plum-deep/60 p-5 backdrop-blur">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                    Official service number
                  </p>
                  <p className="mt-2 font-display text-[1.45rem] font-bold text-ink">
                    {site.whatsappNumber}
                  </p>
                  <a
                    href={site.whatsappLink ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pink mt-4 w-full"
                  >
                    <WhatsAppGlyph />
                    Get help on WhatsApp
                  </a>
                  <p className="mt-3 text-center text-[0.72rem] leading-relaxed text-ink/60">
                    Opens WhatsApp in a new tab. Works on any phone with WhatsApp.
                  </p>
                  <p className="mt-4 border-t border-rose/12 pt-3 text-center text-[0.72rem] leading-relaxed text-ink/60">
                    Prefer email? Write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-rose underline underline-offset-2"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-rose/12 pt-4 text-[0.76rem] leading-relaxed text-ink/60">
                Your safety comes first. You can ask us to delete your messages at any time, and
                sensitive questions are handed to a person — not left to a machine.{" "}
                <Link
                  href="/privacy"
                  className="text-ink/80 underline underline-offset-2 hover:text-pink-deep"
                >
                  Privacy
                </Link>{" "}
                ·{" "}
                <Link
                  href="/safeguarding"
                  className="text-ink/80 underline underline-offset-2 hover:text-pink-deep"
                >
                  Safeguarding
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Secondary path: everyone else */}
      <section className="bg-plum pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="For partners, media and researchers"
              title="Write to the team"
              intro="This form is not for service requests — those are answered faster on WhatsApp. Use it for partnership, funding, media, research or a data request. We usually reply within three working days."
            />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-2xl border border-rose/15 bg-plum-soft/40 p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ink">Send us a message</h3>
                <p className="mt-1.5 text-[0.85rem] text-ink/62">
                  Fields marked * are required.
                </p>
                <div className="mt-6">
                  <ContactForm variant="contact" />
                </div>
              </div>
            </Reveal>

            {/* Channels */}
            <div className="space-y-4">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-rose/15 bg-plum-soft/30 p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                    Official channels
                  </p>
                  <ul className="mt-4 space-y-4">
                    <Channel label="General" value={site.email} href={`mailto:${site.email}`} />
                    <Channel
                      label="Media and press"
                      value={site.pressEmail}
                      href={`mailto:${site.pressEmail}`}
                    />
                    <Channel label="Based in" value={site.address} />
                    <Channel label="Office hours" value={site.officeHours} />
                  </ul>
                  <div className="mt-5 border-t border-rose/12 pt-4">
                    <p className="text-[0.78rem] leading-relaxed text-ink/60">
                      Need help with a service? Use the WhatsApp card above — it is the fastest
                      route.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Safeguarding */}
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-pink/25 bg-pink/6 p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-pink">
                    Safeguarding and privacy
                  </p>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/65">
                    We collect only what is needed to respond. We do not sell or share your details.
                    Women using our service can ask us to delete their data at any time.
                  </p>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/65">
                    If your message concerns the safety of a person, say so in the first line and it
                    will be escalated to a named safeguarding lead.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/privacy"
                      className="rounded-full border border-rose/25 px-3 py-1.5 text-[0.72rem] text-ink/70 transition-colors hover:border-rose/50 hover:text-ink"
                    >
                      Privacy and data protection
                    </Link>
                    <Link
                      href="/safeguarding"
                      className="rounded-full border border-rose/25 px-3 py-1.5 text-[0.72rem] text-ink/70 transition-colors hover:border-rose/50 hover:text-ink"
                    >
                      Safeguarding
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <Photo
                  slot="contact"
                  aspect="16/9"
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  rounded="rounded-2xl"
                  caption
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="on-light py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <SectionHeading
              eyebrow="Partnership"
              tone="light"
              title="Looking to fund, research or build with us?"
            />
            <Link href="/partners#collaborate" className="btn btn-pink shrink-0">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Channel({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-baseline justify-between gap-6">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-orchid-light">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="link-underline break-all text-right text-[0.88rem] text-ink/75 hover:text-ink"
        >
          {value}
        </a>
      ) : (
        <span className="text-right text-[0.88rem] text-ink/60">{value}</span>
      )}
    </li>
  );
}
