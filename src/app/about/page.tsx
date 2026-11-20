import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import Reveal from "@/components/Reveal";
import { EndBand, Pic, PhotoHero, Title } from "@/components/PageBits";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <PageSchema path="/about" />

      <PhotoHero
        photo="p007-img-0269"
        alt="Women sitting together on the floor during a Jamhooriyat Saheliyan consultation meeting, with the project banners on the wall."
        eyebrow="About us"
        title={
          <>
            Friends of democracy,
            <br />
            from the villages of Sindh.
          </>
        }
        intro="Jamhooriyat Saheliyan is a women-led initiative. We help rural women get information from government offices — so they can ask questions and be heard."
      />

      {/* 1. Who we are */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Pic
              photo="p005-img-0248"
              alt="A woman in a bright, multicoloured dupatta listening during a meeting."
              aspect="4/5"
              focus="50% 35%"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Title
              align="left"
              eyebrow="Who we are"
              title="Information is power. Every woman should have it."
            />
            <p className="mt-6 text-[1.06rem] leading-relaxed text-ink/72">
              Decisions about water, schools, hospitals and roads are made in offices that rural
              women rarely enter. The information behind those decisions is hard to find and
              rarely in the languages women speak.
            </p>
            <p className="mt-4 text-[1.06rem] leading-relaxed text-ink/72">
              So we built a free WhatsApp chatbot with women, for women. It explains their right to
              information, finds the right office and writes the request for them.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fff3f8] p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-pink-deep">Our vision</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                  Rural women who get the information they need and shape the decisions about their
                  communities.
                </p>
              </div>
              <div className="rounded-2xl bg-[#fff3f8] p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-pink-deep">Our mission</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                  Simple, safe technology that opens up public information and makes government
                  answer to women.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Our story in three steps */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="Our story" title="How the chatbot was born." />
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "We listened",
                d: "For years we sat with women in their villages. The problem was clear: they did not know they had the right to ask — or which office to ask.",
                photo: "p006-img-0257",
                alt: "Women gathered in a room for a listening session.",
              },
              {
                n: "02",
                t: "We built it together",
                d: "200 women helped decide what the chatbot should say, which words it should use and when a real person should take over.",
                photo: "p046-whatsapp-image-2026-09-15-at-11-04-46-pm",
                alt: "Women sitting close together during a co-creation session.",
              },
              {
                n: "03",
                t: "Now it is live",
                d: "Today any woman can send “Hi” on WhatsApp and get an RTI application in English, Urdu or Sindhi.",
                photo: "p059-whatsapp-image-2026-09-15-at-11-34-52-am-1",
                alt: "Women trying the WhatsApp chatbot on their phones.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="h-full overflow-hidden rounded-[1.4rem] bg-white shadow-[0_24px_50px_-34px_rgba(190,24,93,0.55)]">
                  <Pic photo={s.photo} alt={s.alt} aspect="4/3" rounded="rounded-none" sizes="(max-width: 768px) 92vw, 30vw" />
                  <div className="p-6">
                    <p className="text-[0.72rem] font-bold tracking-[0.16em] text-pink-deep">STEP {s.n}</p>
                    <h3 className="mt-2 font-serif text-[1.6rem] font-semibold leading-tight tracking-normal text-ink">{s.t}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/68">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. What we believe */}
      <section className="bg-[#9d174d] py-20 text-white md:py-28">
        <div className="shell">
          <Title light eyebrow="What we believe" title="Four simple promises." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🤝", "Built with women", "Women shape every part of the tool. Their needs set our plans."],
              ["🔒", "Safe and private", "We ask for very little, and you can ask us to delete your messages."],
              ["💬", "In your language", "English, Urdu and Sindhi, in simple words, on a phone you already have."],
              ["👭", "Stronger together", "One question is easy to ignore. Many women asking together is not."],
            ].map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white p-6 text-ink">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-pink/10 text-2xl">{icon}</span>
                  <h3 className="mt-4 font-display text-[1.1rem] font-semibold text-ink">{t}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/68">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Faces of the network */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title
            eyebrow="Our network"
            title="The women behind it."
            intro="200 women co-created the chatbot, and 157 women now act together in our civic network across three districts."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Pic photo="p004-img-0247" alt="An older woman listening thoughtfully during a meeting." aspect="3/4" focus="40% 35%" sizes="(max-width: 1024px) 46vw, 23vw" />
            <Pic photo="p038-whatsapp-image-2026-09-15-at-11-03-14-pm-1" alt="A young woman standing and speaking to the group." aspect="3/4" sizes="(max-width: 1024px) 46vw, 23vw" />
            <Pic photo="p062-whatsapp-image-2026-09-16-at-12-32-47-am" alt="A woman holding a printed information sheet." aspect="3/4" sizes="(max-width: 1024px) 46vw, 23vw" />
            <Pic photo="p048-whatsapp-image-2026-09-15-at-11-09-04-pm" alt="A facilitator speaking to women seated outdoors." aspect="3/4" sizes="(max-width: 1024px) 46vw, 23vw" />
          </div>
        </div>
      </section>

      <EndBand
        title="Try the chatbot, or work with us."
        body="Send “Hi” on WhatsApp to see how it works — or tell us how you would like to support women in Sindh."
        primary={{ href: site.whatsappLink ?? "/contact", label: "Say Hi on WhatsApp", external: true }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
