import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StoriesGrid from "@/components/StoriesGrid";
import StorySlider from "@/components/StorySlider";
import Photo from "@/components/Photo";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata("/stories");

const resources = [
  { t: "Research and policy briefs", d: "Short notes on method, findings and what we are testing next.", format: "PDF" },
  { t: "Explainers", d: "Plain-language guides to the Right to Information, in English and Urdu.", format: "Guide" },
  { t: "Reports", d: "Periodic reporting on participation, requests filed and responses received.", format: "Report" },
  { t: "Media", d: "Press coverage, interviews and statements.", format: "Media" },
];

export default function StoriesPage() {
  return (
    <>
      <PageSchema path="/stories" />
      <PageHero
        eyebrow="Stories and knowledge hub"
        title="What women ask for, and what happens next."
        intro="Community stories, explainers and research. Everything here is published with consent, and everything is described as it is — including the cases that did not go the way we hoped."
      />

      <section className="relative overflow-hidden bg-plum-deep py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-[24rem] w-[24rem] rounded-full bg-violet/20 blur-[130px]"
        />
        <div className="shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Story gallery"
              title="Faces and moments from the network."
              intro="Drag, swipe or use the arrows to move through all 100 photographs. The eight written stories come first, followed by the wider archive. Captions that name who, where and with what permission are still being confirmed by the team."
            />
          </Reveal>
          <StorySlider />
        </div>
      </section>

      <section className="bg-plum py-16 md:py-20">
        <div className="shell">
          <StoriesGrid />
        </div>
      </section>

      {/* Knowledge hub */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Knowledge hub"
                  tone="light"
                  title="Method, not marketing."
                  intro="The documents a researcher or donor would want before a conversation: how we counted, what we learned, and where we are unsure."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8">
                  <Photo
                    slot="partnersTalk"
                    aspect="4/3"
                    sizes="(max-width: 1024px) 92vw, 38vw"
                    rounded="rounded-[1.3rem]"
                    caption
                  />
                </div>
              </Reveal>
            </div>

            <div className="space-y-3">
              {resources.map((r, i) => (
                <Reveal key={r.t} delay={i * 0.06}>
                  <div className="group flex items-center gap-5 rounded-xl border border-plum/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-plum/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet/8 font-display text-[0.6rem] font-bold uppercase tracking-wider text-violet">
                      {r.format}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-[1rem] font-semibold text-plum">{r.t}</h3>
                      <p className="mt-0.5 text-[0.85rem] leading-relaxed text-plum/65">{r.d}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-plum/5 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-plum/60">
                      Soon
                    </span>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.28}>
                <p className="pt-2 text-[0.78rem] leading-relaxed text-plum/65">
                  Documents are added as they are cleared for publication. To request a specific
                  brief, write to{" "}
                  <a href="mailto:media@jamhooriyatsaheliyan.org" className="text-violet underline underline-offset-2">
                    media@jamhooriyatsaheliyan.org
                  </a>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Consent note */}
      <section className="bg-plum-deep py-16">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-5 rounded-2xl border border-rose/15 bg-plum/40 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Consent and safety</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/65">
                  No story, quote, photo or video is published without written consent. Captions
                  state who, where and with what permission. Anyone can ask us to withdraw a story
                  at any time, and we will.
                </p>
              </div>
              <Link href="/contact" className="btn btn-ghost shrink-0">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Contribute"
        title="Have a story to tell?"
        body="If you are part of the network and would like to share what changed for you, we will only publish it with your written consent — and you choose the words."
      />
    </>
  );
}
