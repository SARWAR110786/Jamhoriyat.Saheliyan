"use client";

import { useRef, useState } from "react";

/**
 * The project film (Collective Pakistan × Jamhooriyat Saheliyan), 1080p with
 * sound. It shows a cover with a large play button and only starts loading
 * the video when the visitor presses play, so the page stays fast.
 */
export default function StoryVideo({
  src = "/video/our-story.mp4",
  poster = "/video/our-story-poster.jpg",
  label = "Watch our story · 1:25 · with sound",
  ariaLabel = "Play the Jamhooriyat Saheliyan film, 1 minute 25 seconds, with sound",
  portrait = false,
}: {
  src?: string;
  poster?: string;
  label?: string;
  ariaLabel?: string;
  /** Vertical (9:16) video, e.g. a phone reel. */
  portrait?: boolean;
} = {}) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    const v = video.current;
    if (!v) return;
    v.muted = false;
    void v.play();
  };

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] bg-black shadow-[0_40px_90px_-45px_rgba(157,23,77,0.75)] ring-1 ring-pink/15">
      <video
        ref={video}
        className={`block w-full bg-black ${portrait ? "aspect-[9/16]" : "aspect-video"}`}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        onPlay={() => setStarted(true)}
      >
        Your browser cannot play this video.
      </video>

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={ariaLabel}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(180deg,rgba(40,4,22,0.15)_0%,rgba(40,4,22,0.55)_100%)] text-white"
        >
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-pink-deep shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
            <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-white/60" />
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative ml-1 h-9 w-9 sm:h-10 sm:w-10">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
          <span className="rounded-full bg-black/45 px-4 py-1.5 text-[0.85rem] font-semibold backdrop-blur">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
