import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { archiveCount, archivePhotos } from "@/content/gallery";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageSchema path="/gallery" />
      <section className="relative overflow-hidden bg-plum pb-14 pt-32 md:pb-16 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-[24rem] w-[24rem] rounded-full bg-violet/25 blur-[130px]"
        />
        <div className="shell relative z-10">
          <p className="eyebrow">Photo archive</p>
          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.2rem,5.4vw,3.8rem)] font-bold leading-[1.02] text-ivory">
            The women behind the work.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[1.06rem] leading-relaxed text-ivory/68">
            All {archiveCount} photographs shared by the team — community sessions, co-creation
            workshops and the everyday work of the network across Sindh. Select any photograph to
            see it larger.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-rose/15 bg-plum-soft/50 p-4 text-[0.8rem] leading-relaxed text-ivory/70">
            Captions that name who, where and with what permission are being confirmed by the team.
            Images are published only with consent.
          </p>
        </div>
      </section>

      <section className="on-light py-14 md:py-20">
        <div className="shell">
          <Reveal>
            <GalleryGrid photos={archivePhotos} />
          </Reveal>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-plum/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[0.86rem] leading-relaxed text-plum/70">
              If you appear in a photograph and want it removed, write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-violet underline underline-offset-2"
              >
                {site.email}
              </a>{" "}
              and we will take it down.
            </p>
            <Link href="/stories" className="btn btn-pink shrink-0">
              Read the stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
