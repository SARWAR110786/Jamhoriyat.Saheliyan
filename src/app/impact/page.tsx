import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import ClimateMap from "@/components/ClimateMap";
import CTABand from "@/components/CTABand";
import { impactFigures, site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/impact");

export default function ImpactPage() {
  return (
    <>
      <PageSchema path="/impact" />
      <PageHero
        eyebrow="Our impact"
        title="Numbers a donor can check, and the story behind each one."
        intro="Every figure below is reported by the initiative, carries a reporting period, and comes with a short note on how it was counted. Where we do not yet have verified data, we say so."
      />

      {/* Counters */}
      <section className="relative overflow-hidden bg-plum-deep pb-20 pt-14 md:pb-28 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-pink/10 blur-[140px]"
        />
        <div className="shell relative z-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {impactFigures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-rose/12 bg-plum-soft/40 p-6 sm:p-7">
                  <p className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.02em] tabular-nums text-rose">
                    <Counter to={f.value} />
                  </p>
                  <p className="mt-4 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-orchid-light">
                    {f.label}
                  </p>
                  <p className="mt-2.5 text-[0.82rem] leading-relaxed text-ink/62">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-5 rounded-xl border border-rose/12 bg-plum/40 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                  Reporting period
                </p>
                <p className="mt-1.5 text-[0.88rem] text-ink/60">
                  {site.reportingPeriod ?? (
                    <span className="rounded bg-rose/10 px-1.5 py-0.5 font-medium text-rose ring-1 ring-inset ring-rose/25">
                      To be confirmed by the team
                    </span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                  Method
                </p>
                <p className="mt-1.5 text-[0.88rem] text-ink/60">
                  {site.methodologyNote ?? (
                    <span className="rounded bg-rose/10 px-1.5 py-0.5 font-medium text-rose ring-1 ring-inset ring-rose/25">
                      To be confirmed — how participation and reports were counted
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Table */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="What each figure means"
              tone="light"
              title="Precise definitions, not headline rounding."
              intro="Donors ask what a number actually counts. This is our answer, in the same words we would use in a report."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
              <table className="w-full min-w-[38rem] text-left">
                <caption className="sr-only">Impact figures and their definitions</caption>
                <thead>
                  <tr className="border-b border-ink/10 bg-ink/4 text-[0.66rem] uppercase tracking-[0.14em] text-ink/65">
                    <th scope="col" className="px-6 py-3.5 font-semibold">
                      Figure
                    </th>
                    <th scope="col" className="px-6 py-3.5 font-semibold">
                      What it means
                    </th>
                    <th scope="col" className="px-6 py-3.5 font-semibold">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {impactFigures.map((f) => (
                    <tr key={f.label} className="border-b border-ink/6 last:border-0">
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="font-display text-lg font-bold text-violet">
                          {f.value}
                        </span>
                        <span className="ml-2 text-[0.82rem] text-ink/65">{f.label}</span>
                      </td>
                      <td className="px-6 py-4 text-[0.9rem] leading-relaxed text-ink/70">
                        {f.detail}
                      </td>
                      <td className="px-6 py-4 text-[0.8rem] text-ink/65">
                        Initiative-reported
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-3xl text-[0.8rem] leading-relaxed text-ink/65">
              Figures are not extrapolated beyond the period in which they were collected, and are
              not combined across programmes. If a number changes after verification, the page is
              updated and the change is noted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-plum py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Outcomes"
              title="Two cases, described carefully."
              intro="We say “contributed to” on purpose. Many people and processes shape an outcome, and we describe our part honestly."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                slot: "impactHospital" as const,
                kicker: "Access to medicines",
                title: "Medicines at the hospital",
                body: "A women's information request contributed to access to hospital medicines. The request asked for the medicine stock record of the tehsil hospital.",
                meta: "Place, month and consent note to be added.",
              },
              {
                slot: "impactSchool" as const,
                kicker: "Accountability case",
                title: "A teacher returns to school",
                body: "An accountability case contributed to a teacher returning to school. The community documented the absence and raised it with the responsible office.",
                meta: "Place, month and consent note to be added.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-2xl border border-rose/12 bg-plum-soft/30">
                  <Photo
                    slot={c.slot}
                    aspect="16/10"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    rounded="rounded-none"
                  />
                  <div className="p-6">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                      {c.kicker}
                    </p>
                    <h3 className="mt-2.5 font-display text-[1.35rem] font-semibold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/62">{c.body}</p>
                    <p className="mt-4 flex items-center gap-2 text-[0.72rem] text-ink/60">
                      <span className="h-1 w-1 rounded-full bg-rose/50" />
                      {c.meta}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Climate map */}
      <section className="on-ivory-warm py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Climate and accountability map"
              tone="light"
              title="Where a question goes."
              intro="Tap a community point to see the local issue and the route a question would take to the responsible office. Until verified community data exists, this is labelled clearly as a concept."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <ClimateMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Learning */}
      <section className="bg-plum-deep py-20 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Learning"
                title="What has not worked."
                intro="An impact page that only lists wins is a marketing page. These are the constraints we have found, and what we are changing."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-3">
                {[
                  [
                    "Institutional response time",
                    "Replies can exceed the legal window. We are testing collective follow-up rather than individual chasing.",
                  ],
                  [
                    "Shared devices",
                    "Some women use a family phone. Private follow-up needs a different channel, and we are designing one.",
                  ],
                  [
                    "Literacy assumptions",
                    "Text-first prompts still exclude some users. Voice is being tested, not claimed.",
                  ],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-rose/12 bg-plum-soft/30 p-5">
                    <p className="font-display text-[0.96rem] font-semibold text-rose">{t}</p>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink/65">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/stories" className="btn btn-ghost">
                Read community stories
              </Link>
              <Link href="/partners#collaborate" className="btn btn-pink">
                Fund the next phase
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Due diligence"
        title="Ask us for the underlying data."
        body="We are happy to share the reporting sheets behind these figures, and to explain exactly how each one was counted."
      />
    </>
  );
}
