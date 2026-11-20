import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import Reveal from "@/components/Reveal";
import InstagramProfile from "@/components/InstagramProfile";
import { EndBand, Pic, PhotoHero, Title } from "@/components/PageBits";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/stories");

const voices = [
  {
    q: "We did not know we were allowed to ask.",
    d: "The biggest barrier was not the information itself — it was not knowing it was our right, or which office to ask.",
    photo: "p004-img-0247",
    alt: "An older woman listening during a meeting.",
    focus: "40% 30%",
  },
  {
    q: "Knowing the next step turned worry into action.",
    d: "Once women knew exactly which office to write to, they could act that same week.",
    photo: "p061-whatsapp-image-2026-09-15-at-11-34-53-am",
    alt: "Women reading the chatbot's reply on a phone.",
    focus: "50% 40%",
  },
  {
    q: "Asking together is easier.",
    d: "One question from one woman is easy to ignore. The same question from a whole group is not.",
    photo: "p041-whatsapp-image-2026-09-15-at-11-03-15-pm",
    alt: "Women sitting close together in a group.",
    focus: "50% 40%",
  },
];

const gallery = [
  ["p006-img-0257", "Women seated around a room during a consultation meeting.", "3/4"],
  ["p026-whatsapp-image-2026-09-15-at-10-32-28-pm-1", "Women gathered on a colourful rug.", "4/3"],
  ["p058-whatsapp-image-2026-09-15-at-11-34-50-am", "A woman using a phone during a session.", "3/4"],
  ["p066-whatsapp-image-2026-09-16-at-12-32-50-am-1", "A facilitator with women seated on mats.", "4/3"],
  ["p040-whatsapp-image-2026-09-15-at-11-03-14-pm", "Women sitting together outdoors.", "3/4"],
  ["p069-whatsapp-image-2026-09-16-at-12-32-51-am", "A group of women holding information sheets.", "4/3"],
  ["p057-whatsapp-image-2026-09-15-at-11-34-49-am", "Women looking at a phone together.", "3/4"],
  ["p014-whatsapp-image-2026-08-16-at-7-22-01-pm", "A meeting with women around a table.", "4/3"],
] as const;

export default function StoriesPage() {
  return (
    <>
      <PageSchema path="/stories" />

      <PhotoHero
        photo="p026-whatsapp-image-2026-09-15-at-10-32-28-pm-1"
        alt="Women sitting together on a colourful rug during a Jamhooriyat Saheliyan session."
        eyebrow="Stories"
        title={
          <>
            Voices from
            <br />
            the women of Sindh.
          </>
        }
        intro="What women told us, moments from our sessions, and the latest from our Instagram."
      />

      {/* 1. What women told us */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title
            eyebrow="What we heard"
            title="In their words."
            intro="Themes from our sessions with women in three districts. We share names and photos only with written consent."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {voices.map((v, i) => (
              <Reveal key={v.q} delay={i * 0.08}>
                <figure className="group h-full overflow-hidden rounded-[1.4rem] bg-white shadow-[0_24px_50px_-34px_rgba(190,24,93,0.55)]">
                  <Pic photo={v.photo} alt={v.alt} aspect="4/5" rounded="rounded-none" focus={v.focus} sizes="(max-width: 768px) 92vw, 30vw" />
                  <blockquote className="p-6">
                    <p className="font-serif text-[1.6rem] font-semibold leading-snug text-ink">&ldquo;{v.q}&rdquo;</p>
                    <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/65">{v.d}</p>
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Instagram */}
      <InstagramProfile />

      {/* 3. Photo moments */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Title eyebrow="Moments" title="From our sessions." />
          <div className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-4">
            {gallery.map(([id, alt, aspect]) => (
              <div key={id} className="mb-3 break-inside-avoid sm:mb-4">
                <Pic photo={id} alt={alt} aspect={aspect} rounded="rounded-2xl" sizes="(max-width: 1024px) 46vw, 23vw" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn btn-pink">
              See all photos
            </Link>
          </div>
        </div>
      </section>

      <EndBand
        title="Have a story to share?"
        body="If the chatbot or the network helped you, tell us. We publish only with your written consent — and you choose the words."
        primary={{ href: site.whatsappLink ?? "/contact", label: "Message us on WhatsApp", external: true }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}
