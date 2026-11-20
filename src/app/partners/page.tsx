import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Pic, PhotoHero, Title } from "@/components/PageBits";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/partners");

const ways = [
  {
    t: "Fund the work",
    d: "Donors and foundations: help more women reach the chatbot and follow up on their requests.",
    photo: "p069-whatsapp-image-2026-09-16-at-12-32-51-am",
    alt: "Women holding information sheets during a session.",
  },
  {
    t: "Research with us",
    d: "Universities: study what changes when women ask. Three university partnerships already exist.",
    photo: "p052-whatsapp-image-2026-09-15-at-11-31-27-am",
    alt: "A youth forum session with participants seated in a hall.",
  },
  {
    t: "Build the technology",
    d: "Tech and AI partners: improve language support, voice notes and data safety.",
    photo: "p064-whatsapp-image-2026-09-16-at-12-32-48-am",
    alt: "A woman holding a laptop showing the Jamhooriyat Saheliyan project.",
  },
  {
    t: "Grow the network",
    d: "Community groups and civic networks: bring the chatbot to more villages and share lessons.",
    photo: "p008-img-0284",
    alt: "Women and facilitators standing together beside the project banners.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageSchema path="/partners" />

      <PhotoHero
        photo="p014-whatsapp-image-2026-08-16-at-7-22-01-pm"
        alt="Women and facilitators around a meeting table during a Jamhooriyat Saheliyan session."
        eyebrow="Partner with us"
        title={
          <>
            Let&apos;s reach more
            <br />
            women, together.
          </>
        }
        intro="We work with donors, universities, technology partners and community groups who believe every woman should be able to ask her government."
      >
        <a href="#collaborate" className="btn bg-white !px-7 !py-4 text-[#9d174d] hover:-translate-y-0.5 hover:bg-[#fff1f6]">
          Start a conversation
        </a>
        <a href="/impact" className="btn border border-white/60 !px-7 !py-4 text-white hover:bg-white/10">
          See our impact
        </a>
      </PhotoHero>

      {/* 1. Ways to partner */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="Ways to work with us" title="Find your place in this work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.07}>
                <div className="h-full overflow-hidden rounded-[1.4rem] bg-white shadow-[0_24px_50px_-34px_rgba(190,24,93,0.55)]">
                  <Pic photo={w.photo} alt={w.alt} aspect="4/3" rounded="rounded-none" sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw" />
                  <div className="p-6">
                    <h3 className="font-serif text-[1.55rem] font-semibold leading-tight tracking-normal text-ink">{w.t}</h3>
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-ink/68">{w.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why partner */}
      <section className="bg-[#9d174d] py-20 text-white md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Title light align="left" eyebrow="Why us" title="Built with women, and open about results." />
            <ul className="mt-8 space-y-4">
              {[
                "A live WhatsApp chatbot that women already use",
                "200 women co-created it; 157 act together in our network",
                "We share the data behind every number we publish",
                "Every photo and story is published with consent",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[1.04rem] text-white/92">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-[0.75rem] font-bold text-[#9d174d]">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <Pic
              photo="p059-whatsapp-image-2026-09-15-at-11-34-52-am-1"
              alt="Women using the chatbot on their phones."
              aspect="4/5"
              className="shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
            />
          </Reveal>
        </div>
      </section>

      {/* 3. Contact form */}
      <section id="collaborate" className="on-light scroll-mt-20 py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Title
              align="left"
              eyebrow="Get in touch"
              title="Tell us what you'd like to do."
              intro="A short message is enough. We reply to every serious enquiry — and we'll tell you honestly if it isn't a fit."
            />
            <div className="mt-8 space-y-3 text-[0.98rem] text-ink/75">
              <p>
                📧{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-pink-deep underline underline-offset-2">
                  {site.email}
                </a>
              </p>
              {site.whatsappLink && (
                <p>
                  💬{" "}
                  <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-deep underline underline-offset-2">
                    WhatsApp {site.whatsappNumber}
                  </a>
                </p>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.6rem] border border-pink/15 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(190,24,93,0.55)] sm:p-8">
              <ContactForm variant="partner" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
