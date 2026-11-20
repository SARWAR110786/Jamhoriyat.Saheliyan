"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { chatSteps } from "@/content/chatbot";

/**
 * A swipeable row of real chatbot screenshots, each in a phone frame with a
 * numbered caption. Native scroll-snap, so it works with touch, trackpad and
 * keyboard without a carousel library.
 */
export default function ChatbotShowcase() {
  const track = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(chatSteps.length - 1, i));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + 20;
    setActive(Math.round(el.scrollLeft / step));
  };

  return (
    <div>
      <ol
        ref={track}
        onScroll={onScroll}
        aria-label="The WhatsApp chatbot, step by step"
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {chatSteps.map((s, i) => (
          <li key={s.src} className="w-[15.5rem] shrink-0 snap-start sm:w-[17rem]">
            <div className="rounded-[2.1rem] border border-pink/20 bg-white p-2 shadow-[0_30px_60px_-34px_rgba(190,24,93,0.55)]">
              <div className="relative overflow-hidden rounded-[1.65rem] bg-[#0b141a]" style={{ aspectRatio: "720/1600" }}>
                <Image
                  src={s.src}
                  alt={`Chatbot screen ${i + 1}: ${s.title}`}
                  fill
                  sizes="(max-width: 640px) 248px, 272px"
                  quality={95}
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="mt-4 px-1">
              <p className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-pink-deep">
                STEP {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-[1.05rem] font-semibold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink/68">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5" aria-hidden>
          {chatSteps.map((s, i) => (
            <span
              key={s.src}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-pink-deep" : "w-1.5 bg-pink/25"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous step"
            className="grid h-11 w-11 place-items-center rounded-full border border-pink/30 bg-white text-pink-deep transition hover:border-pink-deep disabled:opacity-30"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo(active + 1)}
            disabled={active >= chatSteps.length - 1}
            aria-label="Next step"
            className="grid h-11 w-11 place-items-center rounded-full bg-pink-deep text-white transition hover:bg-[#a3154f] disabled:opacity-30"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
