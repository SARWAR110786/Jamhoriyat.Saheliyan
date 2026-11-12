import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata("/women-ai-democracy");

const commitments = [
  {
    t: "Co-created",
    d: "Women shaped the tool from the start — the questions it answers, the words it uses, and where it stops.",
  },
  {
    t: "Accessible",
    d: "Local language, simple prompts, a familiar app, and an assumption that the phone may be shared.",
  },
  {
    t: "Responsible",
    d: "Informed consent, minimal data, clear limits, and a human follow-up whenever it is needed.",
  },
  {
    t: "Honest",
    d: "We say what the tool can and cannot do. Every feature is labelled live or in development.",
  },
  {
    t: "Collective",
    d: "Individual access becomes power when women act together. The network is not an add-on.",
  },
];

export default function WomenAIDemocracyPage() {
  return (
    <>
      <PageSchema path="/women-ai-democracy" />
      <PageHero
        eyebrow="Women, AI and democracy"
        title="Democracy is unequal when information is."
        intro="Public records, budgets and service entitlements exist. Yet many women do not know they can ask, where to ask, or how. Digital tools often make this worse, because they assume the user has data, literacy and permission to use a phone."
        image="democracy"
      />

      {/* The gap */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The gap"
                tone="light"
                title="Participation begins where information is held."
              />
            </Reveal>
            <div>
              <Reveal delay={0.08}>
                <p className="text-pretty text-[1.08rem] leading-[1.75] text-plum/75">
                  A woman who does not know a budget exists cannot question it. A woman who does not
                  know a school has a repair allocation cannot ask why the roof still leaks. The
                  barrier is rarely interest — it is access, language and the unwritten rule that
                  someone else will do the asking.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-plum/10 bg-plum/10 sm:grid-cols-2">
                  {[
                    ["Data", "A connection, a data bundle, and a phone that is hers to use."],
                    ["Literacy", "Text-first interfaces assume reading fluency in a second language."],
                    ["Permission", "Shared devices and household norms can make asking visible."],
                    ["Language", "Records exist in a language the office uses, not the one she speaks."],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white p-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet">
                        {k}
                      </p>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-plum/65">{v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-8 border-l-2 border-pink pl-5 font-display text-[1.15rem] font-medium leading-snug text-plum">
                  Jamhooriyat Saheliyan treats AI as a way to lower those barriers — never as a
                  substitute for women&apos;s own judgement, or for institutions&apos; duty to
                  answer.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Five commitments */}
      <section className="relative overflow-hidden bg-plum py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full bg-orchid/15 blur-[140px]"
        />
        <div className="shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="Five commitments that decide how we build."
              intro="Each one is a constraint we accept, not an aspiration we advertise."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {commitments.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="card-dark group relative h-full overflow-hidden p-6">
                  <span className="font-display text-[2.2rem] font-bold leading-none text-rose/15 transition-colors group-hover:text-rose/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-[1.02rem] font-semibold text-ivory">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ivory/65">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What responsible AI means here */}
      <section className="bg-plum-deep py-20 md:py-28">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Photo
                slot="democracyTwo"
                aspect="4/3"
                sizes="(max-width: 1024px) 92vw, 46vw"
                rounded="rounded-[1.4rem]"
                caption
              />
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Responsible AI, in practice"
                  title="Small model, narrow job, human handover."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-4">
                  {[
                    [
                      "A narrow job",
                      "The service explains process and points to the right office. It does not give legal opinions or predict outcomes.",
                    ],
                    [
                      "Minimal data",
                      "We ask for what the question needs and nothing more. No profiling, no advertising, no resale.",
                    ],
                    [
                      "Visible limits",
                      "When a question is outside what the service can answer, it says so and hands over to a person.",
                    ],
                    [
                      "Human follow-up",
                      "Community facilitators support first use and step in when a request stalls.",
                    ],
                    [
                      "Auditable answers",
                      "Replies name the source of the information, so a woman can check it herself.",
                    ],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-4">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orchid"
                      />
                      <div>
                        <p className="font-display text-[0.98rem] font-semibold text-ivory">{t}</p>
                        <p className="mt-1 text-[0.88rem] leading-relaxed text-ivory/65">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <Link href="/technology" className="btn btn-ghost mt-9">
                  How the service works
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Digital inclusion */}
      <section className="on-ivory-warm py-20 md:py-24">
        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionHeading
                eyebrow="Digital inclusion"
                tone="light"
                align="center"
                title="Technology alone does not remove structural inequality."
                intro="It can, however, change who holds information — and information is where participation begins."
              />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Who is in the room",
                d: "Decisions improve when the women living with the consequences are present — not represented by someone else.",
              },
              {
                t: "Who can ask",
                d: "A right nobody knows they have is not yet a right in practice. Access work is democracy work.",
              },
              {
                t: "Who answers",
                d: "Accountability is a relationship. The network keeps the question alive long enough to get an answer.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="card-light h-full p-7">
                  <h3 className="font-display text-[1.05rem] font-semibold text-plum">{c.t}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-plum/62">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Research and partnership"
        title="Test these assumptions with us."
        body="We report what works and what does not. Research partners can help us strengthen language support, safety and evidence."
      />
    </>
  );
}
