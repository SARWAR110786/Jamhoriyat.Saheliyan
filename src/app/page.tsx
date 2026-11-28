import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ChatDemo from "@/components/ChatDemo";
import StoryVideo from "@/components/StoryVideo";
import PhoneSteps from "@/components/PhoneSteps";
import InstagramProfile from "@/components/InstagramProfile";
import { site } from "@/content/site";

/**
 * Home page — kept deliberately simple (inspired by mehfooz.ai):
 *   1. Hero with background video: what we offer, in one line
 *   1b. Our story: the project film
 *   2. See it work: the chatbot conversation, animated
 *   3. How it works: five steps on a phone
 *   3b. Inside the RTI × AI workshop (reel)
 *   4. What you can ask about
 *   5. Who we are
 *   6. Instagram
 *   7. Work with us
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <SeeItWork />
      <HowItWorks />
      <Workshop />
      <WhatYouCanAsk />
      <WhoWeAre />
      <InstagramProfile />
      <CTABand />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────── Hero ─── */
function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-[#5b0a33] pt-24 pb-24 md:min-h-[92vh] md:pt-28">
      {/* background video: real photos from our sessions in Sindh */}
      <video
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* poster for reduced-motion visitors */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 hidden bg-cover bg-center motion-reduce:block"
        style={{ backgroundImage: "url(/video/hero-poster.jpg)" }}
      />
      {/* pink overlay so the words stay readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(74,6,40,0.92)_0%,rgba(122,14,66,0.78)_45%,rgba(190,24,93,0.35)_100%)]"
      />

      <div className="shell">
        <div className="max-w-3xl text-white">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Free · WhatsApp · English, Urdu, Sindhi
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-[clamp(2.8rem,7vw,5.4rem)] font-semibold leading-[1] text-white">
              Your right to know,
              <br />
              now on WhatsApp.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-white/90">
              A free AI chatbot that helps women in Sindh ask government offices about water,
              schools, hospitals and development — and writes the RTI application for you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              {site.whatsappLink && (
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white !px-7 !py-4 text-[1rem] text-[#9d174d] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 hover:bg-[#fff1f6]"
                >
                  <WhatsAppGlyph />
                  Ask on WhatsApp
                </a>
              )}
              <Link
                href="#see-it-work"
                className="btn border border-white/60 !px-7 !py-4 text-[1rem] text-white hover:-translate-y-0.5 hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>
            <p className="mt-6 text-[0.85rem] text-white/75">
              No app to install · No account · We never ask for your ID number.
            </p>
          </Reveal>
        </div>
      </div>

      <a
        href="#our-story"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white"
      >
        Learn more
        <svg className="hint-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}

/* ──────────────────────────────────────────────────────── Our story film ─── */
function OurStory() {
  // Figures as stated in the film.
  const results = [
    ["100", "women trained in RTI"],
    ["25+", "RTI applications filed (target was 20)"],
    ["300+", "women in our WhatsApp community"],
    ["10–15", "women use the chatbot every day"],
  ];
  return (
    <section id="our-story" aria-labelledby="our-story-heading" className="scroll-mt-20 bg-white pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Our story</p>
          <h2 id="our-story-heading" className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">
            Empowering rural women to ask, know and act.
          </h2>
          <p className="mt-4 text-[1.04rem] leading-relaxed text-ink/70">
            Women in Thatta, Badin and Hyderabad co-created a WhatsApp RTI service. Instead of adapting women to technology, we adapted the technology to women&apos;s
            realities. Watch how it happened.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <StoryVideo />
          <p className="mt-3 text-center text-[0.78rem] text-ink/50">
            A project of Collective Pakistan, supported by CIVICUS, ADI South Asia, Accountability
            Lab and the Digital Democracy Initiative.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {results.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-pink/15 bg-[#fff8fb] p-5 text-center">
              <dt className="sr-only">{l}</dt>
              <dd>
                <span className="block font-serif text-[clamp(2.2rem,4vw,2.9rem)] font-semibold leading-none text-pink-deep">
                  {n}
                </span>
                <span className="mt-2 block text-[0.82rem] leading-snug text-ink/65">{l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── See it work ─── */
function SeeItWork() {
  const points = [
    { icon: "lang", text: "Write in Roman Urdu, English or Sindhi" },
    { icon: "ai", text: "AI finds the right government office for your problem" },
    { icon: "doc", text: "Get a formal RTI letter, ready to send" },
    { icon: "clock", text: "By law, the office should reply within 15 days" },
  ];
  return (
    <section id="see-it-work" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#6d0b3c_0%,#9d174d_55%,#be185d_100%)] shadow-[0_40px_90px_-50px_rgba(157,23,77,0.8)]">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:p-14">
            <div className="text-white">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/70">See it work</p>
              <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] text-white">
                From one question to a ready RTI application.
              </h2>
              <ul className="mt-8 space-y-4">
                {points.map((p) => (
                  <li key={p.text} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12 text-white">
                      <PointIcon name={p.icon} />
                    </span>
                    <span className="text-[1.05rem] leading-snug text-white/95">{p.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-md text-[0.95rem] italic leading-relaxed text-white/80">
                Built together with 200 women in Sindh, so it speaks the way they speak.
              </p>
              {site.whatsappLink && (
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-8 bg-white text-[#9d174d] hover:-translate-y-0.5 hover:bg-[#fff1f6]"
                >
                  Ask your question
                  <Arrow />
                </a>
              )}
              <p className="mt-4 flex items-center gap-2 text-[0.78rem] text-white/65">
                <ShieldIcon /> Private. You can ask us to delete your messages at any time.
              </p>
            </div>

            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────── How it works ─── */
function HowItWorks() {
  return (
    <section id="how-it-works" className="on-light scroll-mt-20 py-20 md:py-28">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">Five steps. One WhatsApp chat.</h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            You don&apos;t need a lawyer, a computer or the right words to start.
          </p>
        </div>
        <div className="mt-14">
          <PhoneSteps />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────── RTI × AI workshop reel ─── */
function Workshop() {
  const steps = [
    ["Address the Designated Officer", "Write to the officer named for RTI requests in that department."],
    ["Clearly ask for the information", "Say exactly which record, budget or detail you want."],
    ["Provide your contact details", "So the office can send you the reply."],
    ["Submit the application", "By email or by hand — then follow up if there is no answer."],
  ];
  const focus = [
    "Civic Education & Democratic Participation",
    "Digital Literacy & Responsible Digital Citizenship",
    "Women Leadership & Community Mobilization",
    "Human Rights & Inclusive Governance",
    "Community-Led Tech Solutions",
  ];
  return (
    <section id="workshop" aria-labelledby="workshop-heading" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
        <Reveal>
          <div className="mx-auto w-full max-w-[21rem]">
            <StoryVideo
              portrait
              src="/video/workshop.mp4"
              poster="/video/workshop-poster.jpg"
              label="Watch · 0:56 · with sound"
              ariaLabel="Play the RTI and AI workshop video, 56 seconds, with sound"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">RTI × AI Workshop</p>
            <h2 id="workshop-heading" className="mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)] text-ink">
              Two days on the Right to Information and building our AI chatbot.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/70">
              In our workshop, women learned how to file an RTI request step by step — and helped
              shape the WhatsApp chatbot that now does it with them.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mt-9 font-display text-[1.1rem] font-semibold text-ink">How to file an RTI, in 4 steps</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-3 rounded-2xl border border-pink/15 bg-[#fff8fb] p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-pink-deep font-display text-[0.85rem] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-[0.98rem] font-semibold leading-snug text-ink">{t}</p>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-ink/62">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.14}>
            <h3 className="mt-9 font-display text-[1.1rem] font-semibold text-ink">Our five focus areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focus.map((f, i) => (
                <li
                  key={f}
                  className="rounded-full border border-pink/25 bg-white px-4 py-2 text-[0.88rem] font-medium text-ink/80"
                >
                  <span className="mr-1.5 font-bold text-pink-deep">{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            {site.whatsappLink && (
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pink mt-9"
              >
                <WhatsAppGlyph />
                Your right to know — try it on WhatsApp
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────── What you can ask ─── */
function WhatYouCanAsk() {
  const cards = [
    {
      n: "01",
      tag: "Pani / Sewerage",
      icon: "💧",
      title: "There is no water in my area",
      body: "Ask for the supply schedule, repair budget and action on complaints.",
    },
    {
      n: "02",
      tag: "School / Taleem",
      icon: "🎓",
      title: "Teachers don't come to our school",
      body: "Ask how many teachers are posted, their attendance and school funds.",
    },
    {
      n: "03",
      tag: "Hospital / Sehat",
      icon: "🏥",
      title: "There are no medicines at our BHU",
      body: "Ask about doctors, medicine supply and the health centre's budget.",
    },
    {
      n: "04",
      tag: "Local Government",
      icon: "🏗️",
      title: "Our road has been left half-built",
      body: "Ask about the project budget, the contractor and the deadline.",
    },
  ];
  const track = ["Ask", "Office found", "Letter ready", "Sent"];

  return (
    <section className="relative overflow-hidden bg-[#9d174d] py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-[120px]" />
      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/70">What you can ask about</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] text-white">Everyday problems, real answers.</h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-white/80">
            Whatever the problem in your area, the chatbot helps you ask the office responsible.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.07}>
              <a
                href={site.whatsappLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl bg-white p-6 text-ink shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-pink/10 text-xl">{c.icon}</span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-pink-deep">
                    {c.n} · {c.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[1.45rem] font-semibold leading-tight tracking-normal text-ink">
                  &ldquo;{c.title}&rdquo;
                </h3>
                <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-ink/65">{c.body}</p>

                {/* animated progress track */}
                <div className="mt-6 border-t border-ink/8 pt-4">
                  <div className="relative mb-2 h-[3px] rounded-full bg-pink/15">
                    <span
                      className="track-dot absolute -top-[3px] h-[0.6rem] w-[0.6rem] rounded-full bg-pink-deep shadow-[0_0_0_4px_rgba(236,72,153,0.2)]"
                      style={{ animationDelay: `${i * 0.6}s` }}
                    />
                  </div>
                  <div className="flex justify-between text-[0.64rem] font-medium text-ink/55">
                    {track.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── Who we are ─── */
function WhoWeAre() {
  const stats = [
    ["200", "women helped build it"],
    ["3", "languages: English, Urdu, Sindhi"],
    ["15", "days — the legal time to reply"],
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Photo
              slot="heroMain"
              aspect="4/3"
              sizes="(max-width: 1024px) 92vw, 46vw"
              rounded="rounded-[1.6rem]"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)] text-ink">
                A women-led initiative from Sindh.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/70">
                Jamhooriyat Saheliyan (also written Jamhoriyat Saheliyan, جمہوریت سہیلیاں) means
                &ldquo;friends of democracy&rdquo;. We are a project of Collective Pakistan. We work with women in
                rural Sindh so they can ask questions of the government offices that decide about
                their water, schools, health and climate — and get answers.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-ink/8 py-6">
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd>
                      <span className="font-serif text-[2.6rem] font-semibold leading-none text-pink-deep">{n}</span>
                      <span className="mt-2 block text-[0.78rem] leading-snug text-ink/60">{l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-pink">
                  Our story
                  <Arrow />
                </Link>
                <Link href="/gallery" className="btn btn-ghost">
                  Photos from the field
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────── Icons ─── */
function PointIcon({ name }: { name: string }) {
  const p = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  if (name === "lang")
    return (
      <svg {...p}>
        <path d="M4 5h8M8 3v2m2.5 0C9.5 9 7 12 4 13.5M6 9c1 2 3 3.5 5 4.5M13 21l4-9 4 9m-6.8-3h5.6" />
      </svg>
    );
  if (name === "ai")
    return (
      <svg {...p}>
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
      </svg>
    );
  if (name === "doc")
    return (
      <svg {...p}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  return (
    <svg {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.2 19 6v5.4c0 4.2-2.8 7.4-7 9.4-4.2-2-7-5.2-7-9.4V6l7-2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
