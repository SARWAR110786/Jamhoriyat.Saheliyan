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
          className="pointer-events-none absolute -left-24 top-20 h-[24rem] w-[24rem] rounded-full bg-violet/20 blur-[130px]"
        />
        <div className="shell relative z-10">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.2rem,5.4vw,3.8rem)] font-bold leading-[1.02] text-ivory">
            Ask us something. We answer.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[1.06rem] leading-relaxed text-ivory/65">
            Whether you fund, research, report or want help with the service — write to us. We
            usually reply within three working days.
          </p>
        </div>
      </section>

      <section className="bg-plum pb-20 md:pb-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-2xl border border-rose/15 bg-plum-soft/40 p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-ivory">Send a message</h2>
                <p className="mt-1.5 text-[0.85rem] text-ivory/62">
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
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-orchid-light">
                      Service access
                    </p>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-ivory/65">
                      Message the service on WhatsApp — live today in English, Urdu and Sindhi.
                    </p>
                    <a
                      href={site.whatsappLink ?? undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-rose/30 px-4 py-2 text-[0.82rem] font-semibold text-ivory transition-colors hover:border-rose/60 hover:text-white"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      {site.whatsappNumber}
                    </a>
                    <p className="mt-2 text-[0.72rem] text-ivory/60">
                      For service help only. Partnership and media enquiries go to{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-rose underline underline-offset-2"
                      >
                        {site.email}
                      </a>
                      .
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
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ivory/65">
                    We collect only what is needed to respond. We do not sell or share your details.
                    Women using our service can ask us to delete their data at any time.
                  </p>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ivory/65">
                    If your message concerns the safety of a person, say so in the first line and it
                    will be escalated to a named safeguarding lead.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/privacy"
                      className="rounded-full border border-rose/25 px-3 py-1.5 text-[0.72rem] text-ivory/70 transition-colors hover:border-rose/50 hover:text-ivory"
                    >
                      Privacy and data protection
                    </Link>
                    <Link
                      href="/safeguarding"
                      className="rounded-full border border-rose/25 px-3 py-1.5 text-[0.72rem] text-ivory/70 transition-colors hover:border-rose/50 hover:text-ivory"
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
          className="link-underline break-all text-right text-[0.88rem] text-ivory/75 hover:text-ivory"
        >
          {value}
        </a>
      ) : (
        <span className="text-right text-[0.88rem] text-ivory/60">{value}</span>
      )}
    </li>
  );
}
