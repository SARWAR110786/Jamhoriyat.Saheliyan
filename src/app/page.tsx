import Link from "next/link";
import Image from "next/image";
import NetworkCanvas from "@/components/NetworkCanvas";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import ChatbotShowcase from "@/components/ChatbotShowcase";
import InstagramProfile from "@/components/InstagramProfile";
import { Status } from "@/components/Tbc";
import { impactFigures, site } from "@/content/site";
import { photos } from "@/content/photos";
import { archiveCount, archivePhotos } from "@/content/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChatbotDemo />
      <StartHere />
      <Challenge />
      <Response />
      <HowItWorks />
      <ClimateGovernance />
      <ImpactGlance />
      <FieldPhotos />
      <InstagramProfile />
      <Voices />
      <PartnersStrip />
      <CTABand />
    </>
  );
}

/* ───────────────────────────────────────────────────────────── 1. Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum pb-20 pt-28 md:pb-28 md:pt-36">
      {/* animated network */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,114,182,0.22),transparent_58%),radial-gradient(ellipse_at_85%_25%,rgba(251,207,232,0.5),transparent_52%)]" />
        <div className="absolute inset-0 opacity-70">
          <NetworkCanvas />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum to-transparent" />
      </div>

      <div className="shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-plum/50 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-rose/85 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-pink" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
                </span>
                Free · WhatsApp · Sindh, Pakistan
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-balance text-[clamp(2.5rem,6.2vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.03em] text-ink">
                Information is power.
                <span className="mt-2 block gradient-text">
                  Every woman deserves the power to ask.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-pretty text-[1.06rem] leading-relaxed text-ink/70">
                A free WhatsApp service that helps women in Sindh get answers from government
                offices — about water, health, schools and climate — in English, Urdu or Sindhi.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                {site.whatsappLink && (
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pink"
                  >
                    <WhatsAppGlyph />
                    Get help on WhatsApp
                  </a>
                )}
                <Link href="#chatbot" className="btn btn-ghost">
                  See the chatbot
                </Link>
                <Link
                  href="/partners#collaborate"
                  className="text-[0.88rem] font-semibold text-ink/70 underline underline-offset-4 transition-colors hover:text-ink"
                >
                  Work with us
                </Link>
              </div>

              <div className="mt-6 space-y-2">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] text-ink/70">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>Free · No app to install · No account needed</span>
                  <span aria-hidden className="text-ink/30">
                    ·
                  </span>
                  <a
                    href={site.whatsappLink ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-rose underline underline-offset-2 hover:text-pink-deep"
                  >
                    {site.whatsappNumber}
                  </a>
                </p>
                <p className="max-w-md text-[0.78rem] leading-relaxed text-ink/60">
                  We never ask for your ID number, address or household details.{" "}
                  <Link
                    href="/privacy"
                    className="text-ink/80 underline underline-offset-2 hover:text-pink-deep"
                  >
                    How we handle your data
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-rose/12 pt-6">
                {[
                  ["200", "women helped build it"],
                  ["3", "districts"],
                  ["3", "university partners"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd>
                      <span className="font-display text-2xl font-bold text-rose">{n}</span>
                      <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.12em] text-ink/62">
                        {l}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Photo collage */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Reveal delay={0.12} y={28}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2rem] border border-rose/12"
                />
                <Photo
                  slot="heroMain"
                  aspect="4/3"
                  sizes="(max-width: 1024px) 90vw, 46vw"
                  priority
                  rounded="rounded-[1.4rem]"
                />
                {/* Real chatbot screen, in a phone frame */}
                <div className="absolute -bottom-12 -left-4 w-[38%] max-w-[13rem] sm:-left-10">
                  <div className="rounded-[1.7rem] border border-pink/25 bg-white p-1.5 shadow-[0_30px_60px_-28px_rgba(190,24,93,0.55)]">
                    <div
                      className="relative overflow-hidden rounded-[1.35rem] bg-[#0b141a]"
                      style={{ aspectRatio: "720/1600" }}
                    >
                      <Image
                        src="/chatbot/step-01.webp"
                        alt="The Jamhooriyat Saheliyan WhatsApp chatbot greeting a user and offering three options: RTI kya hai, RTI apply and Help."
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 640px) 38vw, 208px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 -top-5 hidden rounded-full border border-rose/25 bg-plum/85 px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-rose/90 backdrop-blur sm:block">
                  WhatsApp · Right to Information
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── 1b. The chatbot, screen by screen ─── */
function ChatbotDemo() {
  return (
    <section
      id="chatbot"
      aria-labelledby="chatbot-heading"
      className="relative scroll-mt-24 overflow-hidden bg-plum-deep py-20 md:py-24"
    >
      <div className="shell relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Our WhatsApp chatbot</p>
              <h2
                id="chatbot-heading"
                className="mt-4 text-balance text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.06] text-ink"
              >
                From a simple “Hi” to a ready RTI application.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-ink/70">
                These are real screens from the chatbot. It explains your right to information,
                finds the right government office, writes a formal application for you and tells
                you where to send it — all inside WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex shrink-0 flex-wrap gap-3">
              {site.whatsappLink && (
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pink"
                >
                  <WhatsAppGlyph />
                  Try it now
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <ChatbotShowcase />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────── 2. Start here (plain words) ─── */
function StartHere() {
  return (
    <section
      aria-labelledby="start-here"
      className="on-light relative overflow-hidden py-16 md:py-20"
    >
      <div className="shell">
        <Reveal>
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(42,15,61,0.04),0_24px_60px_-40px_rgba(42,15,61,0.5)] sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
              <div>
                <p className="eyebrow text-violet">New here? Start with this</p>
                <h2
                  id="start-here"
                  className="mt-4 text-balance text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.08] text-ink"
                >
                  One question. One WhatsApp message. A clear next step.
                </h2>
                <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink/70">
                  You do not need to be technical, read English, or own a smartphone of your own. If
                  you can send a WhatsApp message, you can use this service.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {site.whatsappLink && (
                    <a
                      href={site.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-pink"
                    >
                      <WhatsAppGlyph />
                      Get help on WhatsApp
                    </a>
                  )}
                  <Link href="#how-it-works" className="btn btn-ghost-dark">
                    See the four steps
                  </Link>
                </div>
              </div>

              <dl className="grid gap-3">
                {[
                  {
                    q: "Is this for me?",
                    a: "If you are a woman in Sindh and you need information from a government office — about water, health, a school, a road or the climate — yes. You can also ask for a group or a neighbour.",
                  },
                  {
                    q: "What does it cost?",
                    a: "Nothing. There is no fee, no app to install and no account to create. You only need WhatsApp on a phone.",
                  },
                  {
                    q: "What happens when I write?",
                    a: "You send a message in English, Urdu or Sindhi. You get a reply in plain words that names the office and explains your next step. If your question needs a person, a facilitator takes over.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.q}
                    className="flex gap-4 rounded-xl border border-ink/8 bg-ink/[0.03] p-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 font-display text-[0.7rem] font-bold text-violet">
                      {i + 1}
                    </span>
                    <div>
                      <dt className="font-display text-[0.98rem] font-semibold text-ink">
                        {item.q}
                      </dt>
                      <dd className="mt-1 text-[0.86rem] leading-relaxed text-ink/65">
                        {item.a}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-xl border border-emerald-600/15 bg-emerald-600/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3.5">
                <span className="mt-0.5 shrink-0 text-emerald-700">
                  <ShieldIcon />
                </span>
                <p className="max-w-xl text-[0.86rem] leading-relaxed text-ink/75">
                  <strong className="font-semibold text-ink">Your safety comes first.</strong> We
                  never ask for your ID number, address or household details. You can ask us to
                  delete your messages at any time, and sensitive questions are handed to a person —
                  not left to a machine.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Link
                  href="/privacy"
                  className="rounded-full border border-ink/20 px-3.5 py-2 text-[0.76rem] font-medium text-ink transition-colors hover:border-ink/45 hover:bg-ink/5"
                >
                  Privacy
                </Link>
                <Link
                  href="/safeguarding"
                  className="rounded-full border border-ink/20 px-3.5 py-2 text-[0.76rem] font-medium text-ink transition-colors hover:border-ink/45 hover:bg-ink/5"
                >
                  Safeguarding
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────── 3. The challenge ─── */
function Challenge() {
  return (
    <section className="relative overflow-hidden bg-plum-deep py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-pink/10 blur-[130px]"
      />
      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The challenge"
              title={
                <>
                  The decisions that shape a woman&apos;s life are made in rooms she rarely enters.
                </>
              }
            />
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-pretty text-[1.12rem] leading-[1.75] text-ink/72">
                Decisions about water, health, schools and climate adaptation are made in offices
                that rural women rarely enter. The information behind those decisions is hard to
                find, seldom available in the languages women speak, and usually reached through
                channels that assume a man will ask.
              </p>
              <p className="mt-5 text-pretty text-[1.12rem] leading-[1.75] text-ink/72">
                Where the climate is changing fastest, those carrying the heaviest load are often
                the least present when public resources are shared.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Hard to find", v: "Public records exist. Knowing they exist, and that you may ask, is the first barrier." },
                { k: "Not in her language", v: "Information is seldom available in the languages women actually speak." },
                { k: "Built for someone else", v: "Channels assume literacy, data and permission to use a phone." },
              ].map((item, i) => (
                <Reveal key={item.k} delay={0.15 + i * 0.08}>
                  <div className="card-dark h-full p-5">
                    <p className="font-display text-[0.95rem] font-semibold text-rose">{item.k}</p>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/65">{item.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────── 3. Our response ─── */
function Response() {
  return (
    <section className="on-light relative overflow-hidden py-20 md:py-28">
      <div className="shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Photo
                slot="aboutCircle"
                aspect="4/5"
                sizes="(max-width: 1024px) 45vw, 24vw"
                rounded="rounded-[1.2rem]"
              />
              <div className="mt-10 grid gap-4">
                <Photo
                  slot="techPhone"
                  aspect="1/1"
                  sizes="(max-width: 1024px) 45vw, 24vw"
                  rounded="rounded-[1.2rem]"
                />
                <Photo
                  slot="aboutTeam"
                  aspect="1/1"
                  sizes="(max-width: 1024px) 45vw, 24vw"
                  rounded="rounded-[1.2rem]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Our response"
                tone="light"
                title={
                  <>
                    A feminist civic technology initiative, built{" "}
                    <span className="text-violet">with</span> women — not for them.
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-[1.05rem] leading-relaxed text-ink/72">
                Jamhooriyat Saheliyan is a women-led initiative. With 200 women, we built a WhatsApp
                service that helps a woman ask a government office a question, understand the answer
                and know her next step.
              </p>
              <p className="mt-4 text-pretty text-[1.05rem] leading-relaxed text-ink/72">
                It sits inside a network of women who learn, share concerns and act together —
                because one woman&apos;s question becomes powerful when others stand with her.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-9 space-y-4 border-t border-ink/10 pt-7">
                {[
                  ["Technology is our engine", "A familiar app, simple prompts, local language."],
                  ["Women's agency is our purpose", "She decides what to ask, and what to do next."],
                  ["Climate justice and accountability are our impact", "Better questions, more responsive institutions."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 font-display text-[0.7rem] font-bold text-violet">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-[1rem] font-semibold text-ink">{t}</p>
                      <p className="mt-0.5 text-[0.9rem] leading-relaxed text-ink/65">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <Link href="/about" className="btn btn-ghost-dark mt-9">
                Read our story
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────── 4. How it works ─── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Ask a question",
      body: "Send a WhatsApp message in English, Urdu or Sindhi. No new app to install.",
      status: "live" as const,
      icon: "chat",
    },
    {
      n: "02",
      title: "Get guidance and information",
      body: "A reply in plain words, with the name of the office that holds the answer.",
      status: "live" as const,
      icon: "book",
    },
    {
      n: "03",
      title: "Understand the next step",
      body: "Learn exactly how to ask for the information, and where to send the request.",
      status: "live" as const,
      icon: "route",
    },
    {
      n: "04",
      title: "Take part in accountability",
      body: "Follow up alone, or with other women in the civic network. Questions become collective.",
      status: "dev" as const,
      icon: "people",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-plum py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-pink/10 blur-[130px]"
      />
      <div className="shell relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Four steps, one familiar channel."
              intro="Every feature on this site is labelled Live today or In development. We only describe what the service can actually do."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <Status state="live" />
              <Status state="dev" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 rounded-2xl border border-rose/15 bg-plum-soft/35 p-5 sm:p-6">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
              What is the Right to Information?
            </p>
            <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-ink/70">
              In plain words: Sindh has a law that lets any citizen ask a government office for
              information it holds — budgets, contracts, school records, water and health plans. The
              office is expected to answer. You do not need a lawyer, a contact or a computer. This
              service helps you ask clearly, and tells you where to send it.
            </p>
          </div>
        </Reveal>

        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <li className="card-dark group relative h-full overflow-hidden p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-orchid-light">
                    {s.n}
                  </span>
                  <Status state={s.status} />
                </div>
                <div className="mt-6 text-rose/80">
                  <StepIcon name={s.icon} />
                </div>
                <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/65">{s.body}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-pink to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-8 text-[0.78rem] leading-relaxed text-ink/60">
            Feature status is confirmed with the team before launch. The service does not replace
            legal advice and cannot guarantee a government response.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StepIcon({ name }: { name: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": true as const,
  };
  if (name === "chat")
    return (
      <svg {...common}>
        <path
          d="M6 9.5A3.5 3.5 0 0 1 9.5 6h13A3.5 3.5 0 0 1 26 9.5v8a3.5 3.5 0 0 1-3.5 3.5H14l-6 4.5v-4.5H9.5A3.5 3.5 0 0 1 6 17.5v-8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 13h8M12 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (name === "book")
    return (
      <svg {...common}>
        <path
          d="M16 8.5c-2.5-1.7-5.4-2.2-9-2.2v17c3.6 0 6.5.5 9 2.2 2.5-1.7 5.4-2.2 9-2.2v-17c-3.6 0-6.5.5-9 2.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 8.5v17" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  if (name === "route")
    return (
      <svg {...common}>
        <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M11 24h6a4 4 0 0 0 0-8h-2a4 4 0 0 1 0-8h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="23" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 26c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 20.5c3 .2 6 2.2 6 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────── 5. Women and climate governance ─── */
function ClimateGovernance() {
  return (
    <section className="relative overflow-hidden bg-plum-deep py-20 md:py-28">
      <div className="shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Women and climate governance"
                title={
                  <>
                    Climate governance cannot be inclusive without women&apos;s power.
                  </>
                }
                intro="Water insecurity, displacement, changing livelihoods and environmental pressure fall heavily on women in climate-affected communities in Sindh. Yet climate decisions about water services, relief, adaptation spending and local planning are rarely shaped by the women who live with the consequences."
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-9 space-y-5 border-l border-rose/20 pl-6">
                {[
                  "Women learn what public services, schemes and entitlements exist in their area.",
                  "They are guided to frame clear questions and use the Right to Information.",
                  "Concerns are documented and connected with the responsible institutions.",
                  "Women raise local climate concerns together, not as isolated individuals.",
                ].map((t) => (
                  <p key={t} className="text-[0.95rem] leading-relaxed text-ink/65">
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/climate-justice" className="btn btn-ghost mt-9">
                Climate justice and governance
                <Arrow />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={26}>
            <div className="relative">
              <Photo
                slot="climateLandWide"
                aspect="4/5"
                sizes="(max-width: 1024px) 92vw, 44vw"
                rounded="rounded-[1.4rem]"
                caption
              />
              <div className="absolute -bottom-6 -left-4 w-40 sm:-left-8 sm:w-48">
                <Photo
                  slot="climateLandTwo"
                  aspect="4/3"
                  sizes="20vw"
                  rounded="rounded-xl"
                  className="drop-shadow-[0_20px_40px_rgba(190,24,93,0.22)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────── 6. Impact at a glance ─── */
function ImpactGlance() {
  return (
    <section className="on-ivory-warm relative overflow-hidden py-20 md:py-28">
      <div className="shell relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Impact at a glance"
              tone="light"
              title="Figures we can stand behind."
              intro="Initiative-reported numbers. Every figure carries a reporting period and a short methodology note — donors will ask, and they should."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/impact" className="btn btn-ghost-dark shrink-0">
              Full impact and methodology
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {impactFigures.map((f, i) => (
            <div key={f.label} className="bg-ivory-warm p-6">
              <p className="font-display text-[clamp(2.2rem,4vw,3rem)] font-bold leading-none text-violet">
                <Counter to={f.value} />
              </p>
              <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink/70">
                {f.label}
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-ink/65">{f.detail}</p>
            </div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-5 flex flex-col gap-2 text-[0.75rem] text-ink/65 sm:flex-row sm:justify-between">
            <p>
              Reporting period:{" "}
              <span className="rounded bg-violet/10 px-1.5 py-0.5 font-medium text-violet ring-1 ring-inset ring-violet/20">
                to be confirmed
              </span>
            </p>
            <p>Source: initiative-reported figures.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── 6b. From the field ─── */
function FieldPhotos() {
  const used = new Set(Object.values(photos).map((p) => p.id));
  const field = archivePhotos.filter((p) => !used.has(p.id)).slice(0, 8);

  return (
    <section className="on-ivory-warm py-20 md:py-24">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="From the field"
              tone="light"
              title="The work, in photographs."
              intro={`A selection from the archive. All ${archiveCount} photographs are in the gallery.`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/gallery" className="btn btn-pink shrink-0">
              See the photo archive
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {field.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <Link
                href="/gallery"
                className="group block overflow-hidden rounded-xl border border-ink/10 bg-plum-soft"
              >
                <Image
                  src={`/photos/thumbs/${p.id}.webp`}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(max-width: 640px) 46vw, 22vw"
                  quality={90}
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-[22rem] w-[22rem] rounded-full bg-pink/10 blur-[130px]"
      />
      <div className="shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="What we heard"
            title="The first step is knowing you are allowed to ask."
            align="center"
            intro="These are themes from our co-creation sessions with women in three districts — written in our words, not theirs. Direct quotes and names are added only when a woman gives written consent."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-rose/12">
              <Photo
                slot="storyOne"
                aspect="16/11"
                sizes="(max-width: 1024px) 100vw, 55vw"
                rounded="rounded-none"
                fade
              />
              <div className="on-photo absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <p className="max-w-lg text-pretty font-display text-[1.15rem] font-medium leading-snug text-ink sm:text-[1.3rem]">
                  Women told us the barrier was not only the information. It was not knowing they had
                  the right to request it — and not knowing which office to ask.
                </p>
                <p className="mt-3 text-[0.78rem] uppercase tracking-[0.14em] text-rose/70">
                  Theme from co-creation sessions · Sindh
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {[
              {
                t: "Steps mattered more than answers",
                d: "Knowing exactly which office to write to turned a worry into an action women could take that week.",
                slot: "storyTwo" as const,
              },
              {
                t: "Asking together was easier",
                d: "One question from one woman is easy to ignore. The same question from a group is harder to.",
                slot: "storyThree" as const,
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={0.08 + i * 0.08}>
                <div className="card-dark flex h-full gap-5 p-5">
                  <Photo
                    slot={item.slot}
                    aspect="1/1"
                    sizes="96px"
                    rounded="rounded-xl"
                    className="w-20 shrink-0"
                  />
                  <div>
                    <p className="font-display text-[0.98rem] font-semibold text-ink">{item.t}</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/70">{item.d}</p>
                    <p className="mt-3 text-[0.68rem] uppercase tracking-[0.14em] text-orchid-light">
                      Theme · co-creation
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-xl text-[0.76rem] leading-relaxed text-ink/60">
              We publish a woman&apos;s words, name or photograph only with her written consent. If
              she changes her mind, we remove them.
            </p>
            <Link href="/stories" className="btn btn-ghost !py-2.5 !text-xs">
              Stories and knowledge hub
              <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────── 8. Partners and invitation ─── */
function PartnersStrip() {
  const partnerTypes = [
    "Universities",
    "Community organisations",
    "Civic technology networks",
    "Research institutes",
    "Women's groups",
  ];

  return (
    <section className="relative overflow-hidden bg-plum-deep py-16 md:py-20">
      <div className="shell relative z-10">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="eyebrow">Who we work with</p>
            <p className="text-[0.76rem] text-ink/60">
              Partner names are published only after written agreement.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {partnerTypes.map((p) => (
              <li
                key={p}
                className="flex items-center rounded-full border border-rose/18 bg-plum/40 px-5 py-2.5 font-display text-sm font-medium text-ink/70"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h9.5M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.2 19 6v5.4c0 4.2-2.8 7.4-7 9.4-4.2-2-7-5.2-7-9.4V6l7-2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9 11.8 2.1 2.1 4-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
