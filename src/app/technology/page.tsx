import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import Reveal from "@/components/Reveal";
import PhoneSteps from "@/components/PhoneSteps";
import ChatDemo from "@/components/ChatDemo";
import { EndBand, Pic, PhotoHero, Title } from "@/components/PageBits";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/technology");

export default function TechnologyPage() {
  return (
    <>
      <PageSchema path="/technology" />

      <PhotoHero
        photo="p065-whatsapp-image-2026-09-16-at-12-32-49-am"
        alt="A facilitator showing the WhatsApp chatbot to women seated on the floor."
        eyebrow="Our technology"
        title={
          <>
            An AI chatbot,
            <br />
            inside WhatsApp.
          </>
        }
        intro="No app to download. No account. Just send “Hi” to +92 306 3804401 and the chatbot guides you, step by step, to a ready RTI application."
      >
        {site.whatsappLink && (
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white !px-7 !py-4 text-[#9d174d] hover:-translate-y-0.5 hover:bg-[#fff1f6]"
          >
            Try it on WhatsApp
          </a>
        )}
        <a href="#how" className="btn border border-white/60 !px-7 !py-4 text-white hover:bg-white/10">
          How it works
        </a>
      </PhotoHero>

      {/* 1. How it works */}
      <section id="how" className="on-light scroll-mt-20 py-20 md:py-28">
        <div className="shell">
          <Title
            eyebrow="How it works"
            title="Five steps. One WhatsApp chat."
            intro="These are real screens from the chatbot."
          />
          <div className="mt-14">
            <PhoneSteps />
          </div>
        </div>
      </section>

      {/* 2. What happens behind the scenes */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title
            eyebrow="Behind the scenes"
            title="What the AI does for you."
            intro="You write your problem in your own words. The chatbot does the hard part."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["🔎", "Checks your problem", "It makes sure your question is about a public service the government is responsible for."],
              ["🏛️", "Finds the right office", "It names the department that holds the answer, and suggests three clear questions to ask."],
              ["📝", "Writes the letter", "It drafts a formal RTI application under the Sindh Transparency & RTI Act 2016, with the office email to send it to."],
            ].map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="card-dark h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-pink/10 text-2xl">{icon}</span>
                  <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-ink">{t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/68">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Try the demo */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="shell">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#6d0b3c_0%,#9d174d_55%,#be185d_100%)] p-6 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="text-white">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/70">See a full conversation</p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] text-white">Watch it work, from “Hi” to the letter.</h2>
                <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-white/85">
                  Tap a problem below the chat to see how the chatbot handles water, schools,
                  hospitals or roads.
                </p>
              </div>
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Languages */}
      <section className="on-light py-20 md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Pic
              photo="p060-whatsapp-image-2026-09-15-at-11-34-52-am"
              alt="Women looking at a phone together while using the chatbot."
              aspect="4/5"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Title align="left" eyebrow="Languages" title="Speaks the way you speak." />
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/70">
              Chat in Roman Urdu, English or Sindhi. Get your RTI application in the language you choose.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["English", "English"],
                ["Urdu", "اردو"],
                ["Sindhi", "سنڌي"],
              ].map(([en, native]) => (
                <div key={en} className="rounded-2xl border border-pink/20 bg-white p-5 text-center">
                  <p className="font-serif text-[1.8rem] font-semibold leading-none text-pink-deep" lang={en === "English" ? "en" : en === "Urdu" ? "ur" : "sd"}>
                    {native}
                  </p>
                  <p className="mt-2 text-[0.8rem] text-ink/60">{en} · Live</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Can / cannot + privacy */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="Honest and safe" title="What it can do — and what it can't." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50/60 p-7">
              <p className="font-display text-[1.1rem] font-semibold text-emerald-800">✓ It can</p>
              <ul className="mt-4 space-y-3 text-[0.98rem] text-ink/75">
                <li>Explain your right to information in simple words</li>
                <li>Find the government office responsible</li>
                <li>Write your RTI application for you</li>
                <li>Tell you where to send it, and when to expect a reply</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-pink/25 bg-[#fff3f8] p-7">
              <p className="font-display text-[1.1rem] font-semibold text-pink-deep">✕ It cannot</p>
              <ul className="mt-4 space-y-3 text-[0.98rem] text-ink/75">
                <li>Replace a lawyer for legal cases</li>
                <li>Promise that an office will reply on time</li>
                <li>Submit the request on your behalf</li>
                <li>Get private records the law does not make public</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {[
              ["🔒", "We never ask for your ID card number."],
              ["🗑️", "Ask us any time to delete your messages."],
              ["🚫", "Your chats are never sold or shared with advertisers."],
            ].map(([i, t]) => (
              <div key={t} className="flex items-center gap-4 rounded-2xl bg-[#fff8fb] p-5">
                <span className="text-2xl">{i}</span>
                <p className="text-[0.95rem] leading-snug text-ink/75">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[0.9rem] text-ink/60">
            Read the full{" "}
            <a href="/privacy" className="font-semibold text-pink-deep underline underline-offset-2">
              privacy note
            </a>
            .
          </p>
        </div>
      </section>

      <EndBand
        title="Ready to ask your first question?"
        body="It's free and takes a few minutes. Send “Hi” and the chatbot will guide you."
        primary={{ href: site.whatsappLink ?? "/contact", label: "Say Hi on WhatsApp", external: true }}
        secondary={{ href: "/about", label: "About us" }}
      />
    </>
  );
}
