import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { EndBand, Pic, PhotoHero, Title } from "@/components/PageBits";
import { pageMetadata } from "@/lib/seo";
import { impactFigures, site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/impact");

export default function ImpactPage() {
  return (
    <>
      <PageSchema path="/impact" />

      <PhotoHero
        photo="p037-whatsapp-image-2026-09-15-at-11-03-13-pm"
        alt="A large group of women and children gathered together for a Jamhooriyat Saheliyan session."
        eyebrow="Our impact"
        title={
          <>
            Small questions.
            <br />
            Real change.
          </>
        }
        intro="When women know they can ask, offices start to answer. Here is what has happened so far."
        focus="50% 40%"
      />

      {/* 1. Numbers */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="In numbers" title="What we have done so far." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {impactFigures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-pink/15 bg-[#fff8fb] p-6 text-center">
                  <p className="font-serif text-[clamp(2.8rem,5vw,3.6rem)] font-semibold leading-none text-pink-deep">
                    <Counter to={f.value} />
                  </p>
                  <p className="mt-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-ink/80">{f.label}</p>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/60">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-[0.82rem] text-ink/55">
            Figures reported by the initiative. We are happy to share how each one was counted.
          </p>
        </div>
      </section>

      {/* 2. Stories of change */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="Stories of change" title="What a question can do." />
          <div className="mt-12 space-y-8">
            {[
              {
                tag: "Hospital / Sehat",
                t: "Women's questions helped bring medicines back.",
                d: "Women asked for the medicine stock record of their tehsil hospital. Their request contributed to medicines being made available again.",
                photo: "p063-whatsapp-image-2026-09-16-at-12-32-48-am-1",
                alt: "Women seated in a circle on green mats during a meeting.",
              },
              {
                tag: "School / Taleem",
                t: "A teacher came back to the classroom.",
                d: "The community recorded a teacher's long absence and raised it with the responsible office. This contributed to the teacher returning to the classroom.",
                photo: "p068-whatsapp-image-2026-09-16-at-12-32-51-am-1",
                alt: "A group of women holding printed sheets during a session.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className={`grid items-center gap-8 overflow-hidden rounded-[1.6rem] bg-white shadow-[0_24px_50px_-34px_rgba(190,24,93,0.5)] lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <Pic photo={c.photo} alt={c.alt} aspect="16/11" rounded="rounded-none" />
                  <div className="p-7 lg:p-10">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pink-deep">{c.tag}</p>
                    <h3 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] font-semibold leading-tight tracking-normal text-ink">{c.t}</h3>
                    <p className="mt-3 text-[1rem] leading-relaxed text-ink/70">{c.d}</p>
                    <p className="mt-4 text-[0.78rem] text-ink/50">
                      We say &ldquo;contributed to&rdquo; on purpose — many people helped make it happen.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What we're learning */}
      <section className="bg-[#9d174d] py-20 text-white md:py-28">
        <div className="shell">
          <Title light eyebrow="What we are learning" title="Honest about the hard parts." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["⏳", "Some offices reply late", "So women now follow up together, which is harder to ignore than one person alone."],
              ["📱", "Many women share a family phone", "We are designing a more private way to follow up."],
              ["🎙️", "Typing is hard for some", "Voice notes are being tested, and we will add them once they work well."],
            ].map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white p-6 text-ink">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-3 font-display text-[1.1rem] font-semibold text-ink">{t}</h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-ink/68">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Photos */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="On the ground" title="Across three districts of Sindh." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <Pic photo="p008-img-0284" alt="Women and facilitators standing together beside the project banners." aspect="4/3" sizes="(max-width: 640px) 92vw, 46vw" />
            <Pic photo="p047-whatsapp-image-2026-09-15-at-11-09-03-pm" alt="Women seated outdoors listening to a facilitator." aspect="4/3" sizes="(max-width: 640px) 92vw, 46vw" />
            <Pic photo="p029-whatsapp-image-2026-09-15-at-10-32-30-pm" alt="Women gathered on a patterned rug during a session." aspect="4/3" sizes="(max-width: 640px) 92vw, 46vw" />
            <Pic photo="p045-whatsapp-image-2026-09-15-at-11-04-45-pm" alt="A crowded session of women seated on the floor." aspect="4/3" sizes="(max-width: 640px) 92vw, 46vw" />
          </div>
        </div>
      </section>

      <EndBand
        title="Help us reach more women."
        body="Fund the next phase, research with us, or ask for the data behind these numbers."
        primary={{ href: "/partners", label: "Partner with us" }}
        secondary={{ href: site.whatsappLink ?? "/contact", label: "Try the chatbot" }}
      />
    </>
  );
}
