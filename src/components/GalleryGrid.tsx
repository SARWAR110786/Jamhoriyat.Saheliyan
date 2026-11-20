"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ArchivePhoto } from "@/content/gallery";

/**
 * The full photo archive as a masonry grid with a keyboard-accessible
 * lightbox. Images are shown without the brand tint so the team can judge the
 * actual quality of each photograph.
 */
export default function GalleryGrid({ photos }: { photos: ArchivePhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = open === null ? null : photos[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View photograph ${i + 1} larger`}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-ink/10 bg-plum-soft text-left focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-violet sm:mb-4"
          >
            <Image
              src={`/photos/${photo.id}.webp`}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw"
              quality={90}
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph ${(open ?? 0) + 1} of ${photos.length}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-plum-deep/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={`/photos/${active.id}.webp`}
              alt={active.alt}
              width={active.w}
              height={active.h}
              sizes="92vw"
              quality={92}
              priority
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-3 flex items-start justify-between gap-4">
              <p className="text-[0.78rem] leading-relaxed text-ink/70">{active.alt}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(null)}
                className="shrink-0 rounded-full bg-white px-3.5 py-1.5 text-[0.78rem] font-semibold text-ink"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
