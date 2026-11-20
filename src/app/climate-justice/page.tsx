import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata("/climate-justice");

export default function ClimateJusticePage() {
  return (
    <>
      <PageSchema path="/climate-justice" />
      <PageHero
        eyebrow="Climate justice and governance"
        title="Climate governance cannot be inclusive without women's power."
        intro="Water insecurity, displacement, changing livelihoods and environmental pressure fall heavily on women in climate-affected communities in Sindh. Yet climate decisions about water services, relief, adaptation spending and local planning are rarely shaped by the women who live with the consequences."
        image="climateWomen"
      />

      {/* Landscape band */}
      <section className="bg-plum-deep py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <Photo
              slot="climateLandWide"
              aspect="21/9"
              sizes="100vw"
              rounded="rounded-[1.4rem]"
              caption
            />
          </Reveal>
        </div>
      </section>

      {/* The condition */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The basic condition"
                tone="light"
                title="A promise of locally led delivery depends on one thing."
              />
            </Reveal>
            <div>
              <Reveal delay={0.08}>
                <p className="text-pretty text-[1.08rem] leading-[1.75] text-ink/75">
                  Climate finance and adaptation programmes increasingly commit to locally led,
                  gender-responsive delivery. That promise depends on a basic condition: women
                  closest to the impact must be able to see what is planned, ask what has been
                  spent, and be heard.
                </p>
                <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-ink/75">
                  Jamhooriyat Saheliyan builds that condition at community level — not by speaking
                  for women at climate forums, but by making sure the information that forums
                  discuss can be reached, questioned and used at home.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Water", "Supply, quality and repair schedules."],
                    ["Relief", "Who was listed, and what was allocated."],
                    ["Adaptation", "What is planned for this union council."],
                    ["Spending", "What has been spent, and on what."],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl border border-ink/10 bg-ink/3 p-4"
                    >
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet">
                        {k}
                      </p>
                      <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink/65">{v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* In practice */}
      <section className="relative overflow-hidden bg-plum py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-pink/12 blur-[140px]"
        />
        <div className="shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="What this looks like in practice"
              title="Four things that happen at community level."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                n: "01",
                t: "Women learn what exists",
                d: "What public services, schemes and entitlements are available in their area — and which office is responsible for each.",
              },
              {
                n: "02",
                t: "They frame clear questions",
                d: "Guided to turn a concern into a specific request, and to use the Right to Information to ask it formally.",
              },
              {
                n: "03",
                t: "Concerns are documented",
                d: "Questions and replies are recorded and connected with the responsible institutions, so a case has a history.",
              },
              {
                n: "04",
                t: "Women raise concerns together",
                d: "Local climate concerns are raised collectively, not as isolated individuals who are easy to ignore.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="card-dark flex h-full gap-6 p-7">
                  <span className="font-display text-[0.78rem] font-bold tracking-[0.18em] text-orchid-light">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.15rem] font-semibold text-ink">{s.t}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/65">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="bg-plum-deep py-20 md:py-28">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <Photo
                  slot="climateLand"
                  aspect="1/1"
                  sizes="(max-width: 1024px) 45vw, 24vw"
                  rounded="rounded-[1.2rem]"
                />
                <Photo
                  slot="climateLandTwo"
                  aspect="1/1"
                  sizes="(max-width: 1024px) 45vw, 24vw"
                  rounded="rounded-[1.2rem]"
                  className="mt-8"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="What we are learning"
                  title="We report results as they are."
                  intro="We are testing whether better access to information leads to stronger questions, more responsive institutions and fairer local decisions. That includes what has not worked."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 space-y-4">
                  {[
                    [
                      "Stronger questions",
                      "Women who use the service ask more specific, more answerable questions than a general complaint.",
                    ],
                    [
                      "Slower institutions",
                      "Replies take longer than the legal window in some cases. Follow-up, not the tool, is the constraint.",
                    ],
                    [
                      "Collective leverage",
                      "A request made by a group gets a different response than the same request made alone.",
                    ],
                  ].map(([t, d]) => (
                    <div
                      key={t}
                      className="rounded-xl border border-rose/12 bg-plum-soft/35 p-5"
                    >
                      <p className="font-display text-[0.98rem] font-semibold text-rose">{t}</p>
                      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink/65">{d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/impact" className="btn btn-ghost mt-9">
                  See the evidence
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Climate funders"
        title="Fund the condition, not just the programme."
        body="Locally led, gender-responsive delivery needs women who can see what is planned and ask what has been spent. That capability is built at community level."
      />
    </>
  );
}
