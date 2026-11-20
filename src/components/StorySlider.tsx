"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { useReducedMotion } from "framer-motion";
import { stories } from "@/content/stories";
import { photos } from "@/content/photos";
import { archivePhotos } from "@/content/gallery";

import "swiper/css";
import "swiper/css/a11y";

/**
 * Horizontal story gallery covering the whole archive.
 *
 * The eight written stories come first; the rest of the team's photographs
 * follow as archive cards, so all 100 images are reachable in one track.
 * Photos used by a story are not repeated in the archive tail.
 */
const storyPhotoIds = new Set(stories.map((s) => photos[s.slot].id));
const archiveOnly = archivePhotos.filter((photo) => !storyPhotoIds.has(photo.id));
const totalSlides = stories.length + archiveOnly.length;

export default function StorySlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [current, setCurrent] = useState(1);
  const reduce = useReducedMotion();

  const paint = useCallback((progress: number) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${Math.max(progress, 0.02)})`;
    }
  }, []);

  const sync = useCallback(
    (swiper: SwiperClass) => {
      setAtStart(swiper.isBeginning);
      setAtEnd(swiper.isEnd);
      setCurrent(swiper.activeIndex + 1);
      paint(swiper.progress);
    },
    [paint],
  );

  return (
    <div className="mt-10">
      {/* The track is inset so the floating arrows sit in the gutter rather
          than on top of a photograph. */}
      <div className="relative">
        <div className="px-6 sm:px-12">
          <Swiper
            modules={[A11y, Keyboard]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              sync(swiper);
            }}
            onSlideChange={sync}
            onProgress={(swiper, progress) => paint(progress)}
            onResize={sync}
            onBreakpoint={sync}
            onReachBeginning={() => setAtStart(true)}
            onReachEnd={() => setAtEnd(true)}
            onFromEdge={sync}
            speed={reduce ? 0 : 550}
            grabCursor
            watchSlidesProgress
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{
              enabled: true,
              prevSlideMessage: "Previous story",
              nextSlideMessage: "Next story",
            }}
            slidesPerView={1.2}
            slidesPerGroup={1}
            spaceBetween={12}
            breakpoints={{
              640: { slidesPerView: 2.2, slidesPerGroup: 2, spaceBetween: 16 },
              768: { slidesPerView: 2.5, slidesPerGroup: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, slidesPerGroup: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 },
            }}
            className="!pb-1"
          >
            {stories.map((story, i) => {
              const photo = photos[story.slot];
              return (
                <SwiperSlide key={story.title}>
                  <SlideCard photo={photo} index={i + 1}>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                      {story.category}
                    </p>
                    <h3 className="mt-2 text-balance font-display text-[1.02rem] font-semibold leading-snug text-ink">
                      {story.title}
                    </h3>
                    <p className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-rose/15 pt-2.5 text-[0.68rem] text-ink/65">
                      <span>{story.date}</span>
                      <span aria-hidden>·</span>
                      <span>{story.read} read</span>
                    </p>
                  </SlideCard>
                </SwiperSlide>
              );
            })}

            {archiveOnly.map((photo, i) => {
              const index = stories.length + i + 1;
              return (
                <SwiperSlide key={photo.id}>
                  <SlideCard photo={photo} index={index}>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                      Photo archive
                    </p>
                    <h3 className="mt-2 font-display text-[1.02rem] font-semibold leading-snug text-ink">
                      Photograph {String(index).padStart(2, "0")}
                    </h3>
                    <p className="mt-2.5 border-t border-rose/15 pt-2.5 text-[0.68rem] text-ink/65">
                      Caption and consent pending
                    </p>
                  </SlideCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Floating side arrows */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={atStart}
          aria-label="Previous stories"
          className="absolute left-0 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-rose/30 bg-plum-deep/85 text-ink shadow-[0_10px_30px_-10px_rgba(190,24,93,0.22)] backdrop-blur-md transition-all duration-300 hover:border-rose/70 hover:bg-plum focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-rose disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-rose/30 disabled:hover:bg-plum-deep/85 motion-reduce:transition-none sm:h-11 sm:w-11"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={atEnd}
          aria-label="Next stories"
          className="absolute right-0 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-rose/30 bg-plum-deep/85 text-ink shadow-[0_10px_30px_-10px_rgba(190,24,93,0.22)] backdrop-blur-md transition-all duration-300 hover:border-rose/70 hover:bg-plum focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-rose disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-rose/30 disabled:hover:bg-plum-deep/85 motion-reduce:transition-none sm:h-11 sm:w-11"
        >
          <Chevron dir="right" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-6 flex items-center gap-4 px-6 sm:px-12">
        <div
          className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-rose/15"
          role="progressbar"
          aria-label="Story gallery progress"
          aria-valuemin={1}
          aria-valuemax={totalSlides}
          aria-valuenow={current}
        >
          <span
            ref={barRef}
            className="absolute inset-0 origin-left rounded-full bg-rose transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: "scaleX(0.02)" }}
          />
        </div>
        <p className="shrink-0 text-[0.72rem] font-medium tabular-nums text-ink/55">
          {String(current).padStart(2, "0")}
          <span className="mx-1 text-ink/30">/</span>
          {String(totalSlides).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

function SlideCard({
  photo,
  index,
  children,
}: {
  photo: { id: string; alt: string };
  index: number;
  children: React.ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-rose/12 bg-plum-soft/40 transition-colors duration-500 hover:border-orchid/45">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={`/photos/${photo.id}.webp`}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 83vw, (max-width: 768px) 45vw, (max-width: 1024px) 36vw, (max-width: 1280px) 30vw, 23vw"
          quality={90}
          draggable={false}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(30,8,26,0.85)] via-[rgba(30,8,26,0.3)] to-transparent"
        />
        <div className="on-photo absolute inset-x-0 bottom-0 p-4 sm:p-5">{children}</div>
        <span className="absolute right-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-[0.62rem] font-semibold tabular-nums text-white backdrop-blur">
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
