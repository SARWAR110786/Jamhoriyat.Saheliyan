"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Say “Hi” on WhatsApp",
    body: "Message +92 306 3804401. No app, no account, no fee.",
    img: "/chatbot/step-01.webp",
  },
  {
    title: "Choose what it's about",
    body: "Pani, school, hospital, local development — or anything else.",
    img: "/chatbot/step-05.webp",
  },
  {
    title: "Tell your problem in your words",
    body: "AI finds the right government office and suggests clear questions.",
    img: "/chatbot/step-07.webp",
  },
  {
    title: "Get your RTI letter",
    body: "A formal application in English, Urdu or Sindhi — written for you.",
    img: "/chatbot/step-11.webp",
  },
  {
    title: "Know where to send it",
    body: "The office email, and your right to a reply within 15 days.",
    img: "/chatbot/step-12.webp",
  },
];

const DURATION = 3800;

/** A phone that plays through real chatbot screens, in step with the list beside it. */
export default function PhoneSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused, visible]);

  return (
    <div ref={root} className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      {/* phone */}
      <div className="relative mx-auto w-[16.5rem] sm:w-[18rem]">
        <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-pink/15 blur-3xl" />
        <div className="animate-float-slow rounded-[2.6rem] border-[7px] border-[#1d1220] bg-[#1d1220] shadow-[0_50px_90px_-40px_rgba(190,24,93,0.6)]">
          <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0b141a]" style={{ aspectRatio: "720/1600" }}>
            {steps.map((s, i) => (
              <Image
                key={s.img}
                src={s.img}
                alt={i === active ? `Chatbot screen: ${s.title}` : ""}
                fill
                sizes="288px"
                quality={95}
                priority={i === 0}
                className={`object-cover object-top transition-all duration-700 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                }`}
              />
            ))}
            <span aria-hidden className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-[#1d1220]" />
          </div>
        </div>
      </div>

      {/* steps */}
      <ol className="space-y-3" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={on ? "step" : undefined}
                className={`relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                  on
                    ? "border-pink/40 bg-white shadow-[0_20px_44px_-30px_rgba(190,24,93,0.6)]"
                    : "border-transparent bg-transparent hover:bg-white/60"
                }`}
              >
                <div className="flex gap-4">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold transition-colors ${
                      on ? "bg-pink-deep text-white" : "bg-pink/10 text-pink-deep"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className={`font-display text-[1.05rem] font-semibold ${on ? "text-ink" : "text-ink/70"}`}>
                      {s.title}
                    </p>
                    <p
                      className={`overflow-hidden text-[0.9rem] leading-relaxed text-ink/65 transition-all duration-500 ${
                        on ? "mt-1 max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
                {on && !paused && (
                  <span
                    key={`bar-${active}`}
                    aria-hidden
                    className="step-progress absolute bottom-0 left-0 h-[3px] bg-pink-deep"
                    style={{ animationDuration: `${DURATION}ms` }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
