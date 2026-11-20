"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildScript, scenarios, type DemoMsg } from "@/content/chatDemo";

/**
 * Animated WhatsApp conversation that replays the real chatbot flow.
 * Messages appear one by one with a typing indicator; the chips below
 * restart it with a different everyday problem. Starts when scrolled into
 * view; with "reduce motion" on, the whole conversation is shown at once.
 */
export default function ChatDemo() {
  const [scenario, setScenario] = useState(0);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const script = useMemo(() => buildScript(scenarios[scenario]), [scenario]);

  // start when visible
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(99);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // play the script
  useEffect(() => {
    if (!started) return;
    if (shown >= script.length) {
      const t = setTimeout(() => {
        setScenario((s) => (s + 1) % scenarios.length);
        setShown(0);
      }, 5000);
      return () => clearTimeout(t);
    }
    const next = script[shown];
    const isBot = next.from === "bot";
    const wait = shown === 0 ? 700 : next.from === "note" ? 900 : isBot ? 1500 : 1100;
    setTyping(isBot);
    const t = setTimeout(() => {
      setTyping(false);
      setShown((n) => n + 1);
    }, wait);
    return () => clearTimeout(t);
  }, [started, shown, script]);

  // keep the newest message in view (inside the chat box only)
  useEffect(() => {
    const el = box.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  const pick = (i: number) => {
    setScenario(i);
    setShown(0);
    setStarted(true);
  };

  return (
    <div ref={root}>
      <div className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#008069] px-4 py-3 text-white">
          <Image
            src="/chatbot/avatar.png"
            alt=""
            width={126}
            height={126}
            className="h-9 w-9 rounded-full bg-white"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.9rem] font-semibold leading-tight">Jamhooriyat Saheliyan</p>
            <p className="text-[0.7rem] leading-tight text-white/80">
              {typing ? "typing…" : "+92 306 3804401"}
            </p>
          </div>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em]">
            Demo
          </span>
        </div>

        {/* chat */}
        <div
          ref={box}
          aria-live="polite"
          className="h-[27rem] space-y-2 overflow-y-auto bg-[#efeae2] px-3 py-4 [scrollbar-width:thin] sm:h-[30rem] sm:px-4"
        >
          {script.slice(0, shown).map((m, i) => (
            <Bubble key={`${scenario}-${i}`} m={m} />
          ))}
          {typing && (
            <div className="flex">
              <div className="flex gap-1 rounded-lg rounded-tl-none bg-white px-3.5 py-3 shadow-sm">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8696a0]"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 bg-[#f0f2f5] px-3 py-2.5">
          <div className="flex-1 rounded-full bg-white px-4 py-2 text-[0.8rem] text-[#8696a0]">Message</div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#00a884] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-2.07A7 7 0 0 0 19 12h-2Z" />
            </svg>
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/70">
        Try a problem
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => pick(i)}
            aria-pressed={i === scenario}
            className={`rounded-full border px-4 py-2 text-[0.82rem] font-medium transition ${
              i === scenario
                ? "border-white bg-white text-[#9d174d]"
                : "border-white/40 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            {s.chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function Bubble({ m }: { m: DemoMsg }) {
  if (m.from === "note") {
    return (
      <div className="flex justify-center py-1">
        <span className="rounded-md bg-[#ffeecd] px-3 py-1 text-[0.68rem] text-[#54656f] shadow-sm">
          {m.text}
        </span>
      </div>
    );
  }
  if (m.from === "user") {
    return (
      <div className="demo-in flex justify-end">
        <div className="max-w-[80%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[0.84rem] leading-snug text-[#111b21] shadow-sm">
          {m.text}
          <span className="ml-2 align-bottom text-[0.62rem] text-[#53bdeb]">✓✓</span>
        </div>
      </div>
    );
  }
  if ("doc" in m) {
    return (
      <div className="demo-in flex">
        <div className="w-[80%] rounded-lg rounded-tl-none bg-white p-2 shadow-sm">
          <div className="rounded-md border border-[#e9edef] bg-[#fdf6f9] p-3">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#be185d]">
              📄 {m.doc.title} · {m.doc.lang}
            </p>
            <p className="mt-2 text-[0.72rem] leading-snug text-[#111b21]">
              <strong>To:</strong> {m.doc.to}
            </p>
            <p className="mt-1 text-[0.72rem] leading-snug text-[#111b21]">
              <strong>Subject:</strong> Sindh Transparency & RTI Act 2016 ke tehat maloomat ki darkhwast
            </p>
            <div className="mt-2 space-y-1">
              <span className="block h-1.5 w-full rounded bg-[#e9edef]" />
              <span className="block h-1.5 w-11/12 rounded bg-[#e9edef]" />
              <span className="block h-1.5 w-4/5 rounded bg-[#e9edef]" />
            </div>
          </div>
          <p className="px-1 pt-1.5 text-[0.78rem] text-[#111b21]">Yeh aapki RTI application hai 👆</p>
        </div>
      </div>
    );
  }
  return (
    <div className="demo-in flex">
      <div className="max-w-[85%]">
        <div className="whitespace-pre-line rounded-lg rounded-tl-none bg-white px-3 py-2 text-[0.84rem] leading-snug text-[#111b21] shadow-sm">
          {formatBold(m.text)}
        </div>
        {m.buttons && (
          <div className="mt-1 grid gap-1">
            {m.buttons.map((b) => (
              <span
                key={b}
                className="rounded-lg bg-white py-1.5 text-center text-[0.8rem] font-medium text-[#00a884] shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** WhatsApp-style *bold* */
function formatBold(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? <strong key={i}>{part.slice(1, -1)}</strong> : part,
  );
}
