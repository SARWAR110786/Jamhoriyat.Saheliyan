/**
 * Illustrative WhatsApp conversation. The brief (p.5) explicitly labels this
 * "Sample reply only" — so the component always renders that disclaimer and
 * never pretends to show a live system.
 */
export default function WhatsAppMock({ className = "" }: { className?: string }) {
  const messages = [
    { from: "user" as const, text: "Dawaiyon ka record kaise milega?" },
    {
      from: "bot" as const,
      text: "Aap apne tehsil hospital se dawaiyon ka stock record RTI ke zariye maang sakti hain.",
    },
    { from: "user" as const, text: "Kis office ko bhejun?" },
    {
      from: "bot" as const,
      text: "MS Office, District Health Authority. Main aapko darkhwast ka draft bana kar de sakti hoon.",
    },
  ];

  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[19rem]">
        {/* phone */}
        <div className="relative overflow-hidden rounded-[2.2rem] border border-rose/25 bg-plum-deep shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2.5 border-b border-white/10 bg-[#1f2c34] px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orchid to-pink text-[0.6rem] font-bold text-white">
              JS
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.78rem] font-semibold text-white/90">Saheliyan</p>
              <p className="text-[0.62rem] text-white/45">online</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
              Sample
            </span>
          </div>

          <div className="space-y-2.5 bg-[#0b141a] px-3 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-[0.74rem] leading-snug ${
                    m.from === "user"
                      ? "rounded-br-sm bg-[#005c4b] text-white/95"
                      : "rounded-bl-sm bg-[#202c33] text-white/85"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            <div className="flex justify-start pt-1">
              <span className="rounded-full bg-white/5 px-2.5 py-1 text-[0.6rem] text-white/35">
                typing…
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#1f2c34] px-3 py-2.5">
            <div className="rounded-full bg-white/5 px-3 py-1.5 text-[0.66rem] text-white/30">
              Message
            </div>
          </div>
        </div>

        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-orchid/20 blur-3xl"
        />
      </div>

      <div className="mt-5 text-center">
        <a
          href="https://wa.me/923063804401"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-plum/40 px-4 py-2 text-[0.78rem] font-semibold text-ivory transition-colors hover:border-rose/50 hover:text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          +92 306 3804401 · live now
        </a>
      </div>

      <p className="mt-3 text-center text-[0.68rem] leading-relaxed text-ivory/60">
        Sample reply only. Illustrative interface — not real data, and not a screenshot of a live
        system.
      </p>
    </div>
  );
}
