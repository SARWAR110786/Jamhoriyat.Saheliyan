import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata("/about");

const values = [
  {
    t: "Information as power",
    d: "Access to public information is the first condition of participation, not a courtesy.",
  },
  {
    t: "Feminist and community-led innovation",
    d: "Women shaped the tool from the start. Their priorities set the roadmap.",
  },
  {
    t: "Accessibility and inclusion",
    d: "Local language, simple prompts, a familiar app, and a phone that may be shared.",
  },
  {
    t: "Responsible and safe technology",
    d: "Informed consent, minimal data, clear limits and human follow-up.",
  },
  {
    t: "Collective agency and sisterhood",
    d: "Individual access becomes power when women act together.",
  },
  {
    t: "Accountability and transparency",
    d: "We report results as they are, including what has not worked.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageSchema path="/about" />
      <PageHero
        eyebrow="About us"
        title={
          <>
            We believe information is power — and that power should not depend on who your family
            knows.
          </>
        }
        intro="Jamhooriyat Saheliyan is a women-centred civic technology initiative working with rural women in Sindh, Pakistan. We combine community knowledge with accessible technology to make democratic participation and climate governance more inclusive."
        image="aboutPortrait"
      />

      {/* Vision / mission */}
      <section className="on-light py-20 md:py-24">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-light h-full p-8">
                <p className="eyebrow text-violet">Vision</p>
                <p className="mt-5 font-display text-[1.35rem] font-semibold leading-snug text-plum">
                  A future where rural women can get the information they need, question
                  institutions with confidence and influence the decisions that shape their
                  communities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card-light h-full p-8">
                <p className="eyebrow text-violet">Mission</p>
                <p className="mt-5 font-display text-[1.35rem] font-semibold leading-snug text-plum">
                  To develop and strengthen community-rooted, accessible technology that expands
                  women&apos;s access to information, supports civic participation and advances
                  accountable, gender-responsive governance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-plum py-20 md:py-28">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div className="grid grid-cols-5 gap-4">
                <Photo
                  slot="aboutCircle"
                  aspect="3/4"
                  sizes="(max-width: 1024px) 60vw, 28vw"
                  className="col-span-3"
                  rounded="rounded-[1.2rem]"
                />
                <Photo
                  slot="extraOne"
                  aspect="3/4"
                  sizes="(max-width: 1024px) 40vw, 18vw"
                  className="col-span-2 mt-12"
                  rounded="rounded-[1.2rem]"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Our story"
                  title="Listening was not enough."
                  intro="After years of working alongside women, we saw that listening and awareness-raising were not enough. Women needed a practical tool for everyday life. So we built one with them — around their language, their needs and their realities."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 text-pretty leading-relaxed text-ivory/60">
                  Two hundred women took part in shaping it: what it should answer, which words it
                  should use, and where it should stop and hand over to a person. The result is a
                  WhatsApp-based service that sits inside a wider network of women, not apart from
                  it.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["200", "women co-created it"],
                    ["3", "districts reached with RTI"],
                    ["157", "women in the civic network"],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-xl border border-rose/12 bg-plum-soft/40 p-4">
                      <p className="font-display text-2xl font-bold text-rose">{n}</p>
                      <p className="mt-1 text-[0.74rem] leading-snug text-ivory/62">{l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="on-ivory-warm py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our values"
              tone="light"
              title="Six commitments we hold ourselves to."
              intro="These are not slogans. Each one shows up in a decision we make about the tool, the data we keep and the way we work with communities."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-plum/10 bg-plum/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.t} className="group bg-ivory-warm p-7 transition-colors hover:bg-white">
                <span className="font-display text-[0.7rem] font-bold tracking-[0.2em] text-violet/75">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-plum">{v.t}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-plum/65">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of change */}
      <section className="relative overflow-hidden bg-plum-deep py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-violet/18 blur-[140px]"
        />
        <div className="shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Theory of change"
              title="If. Then. So."
              intro="These are assumptions we are testing and learning from, not guarantees."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[
              {
                k: "If",
                t: "rural women can get usable information in their own language through a channel they already use, and are connected to a collective of women,",
                tone: "from-violet/25",
              },
              {
                k: "Then",
                t: "they will ask more and better questions of public institutions and raise concerns together,",
                tone: "from-orchid/25",
              },
              {
                k: "So that",
                t: "institutions become more responsive and local decisions, including climate decisions, become more gender-responsive.",
                tone: "from-pink/25",
              },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1}>
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border border-rose/15 bg-gradient-to-b ${s.tone} to-transparent p-7`}
                >
                  <span className="font-display text-[2.6rem] font-bold leading-none text-rose/25">
                    0{i + 1}
                  </span>
                  <p className="mt-4 font-display text-lg font-bold uppercase tracking-[0.12em] text-rose">
                    {s.k}
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ivory/72">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[0.82rem] leading-relaxed text-ivory/60">
              Technology alone does not remove structural inequality. It can, however, change who
              holds information — and information is where participation begins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Community roots */}
      <section className="on-light py-20 md:py-24">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Community roots"
                  tone="light"
                  title="Built in the room, not in a lab."
                  intro="Every decision about language, tone and escalation was tested with women in community settings — including where the tool should stop and a person should take over."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Co-creation sessions with 200 women across three districts.",
                    "Community facilitators who support first use and follow-up.",
                    "A civic network of 157 women who act on questions together.",
                    "Three university partnerships for research and evaluation.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-[0.95rem] leading-relaxed text-plum/70">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/impact" className="btn btn-pink">
                    Our impact
                  </Link>
                  <Link href="/partners" className="btn btn-ghost-dark">
                    Partner with us
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Photo
                slot="aboutTeam"
                aspect="4/3"
                sizes="(max-width: 1024px) 92vw, 46vw"
                rounded="rounded-[1.4rem]"
                caption
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="We are learning in the open."
        body="If you fund, research or build for gender-responsive governance, there is a place for you in this work."
      />
    </>
  );
}
