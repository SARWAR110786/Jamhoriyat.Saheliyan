import Link from "next/link";

export function Mark({ className = "" }: { className?: string }) {
  // A circle of women connected to one another — the "network" idea, drawn small.
  const dots = [
    [32, 8],
    [50, 15],
    [56, 32],
    [50, 49],
    [32, 56],
    [14, 49],
    [8, 32],
    [14, 15],
  ];
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mark-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6" />
          <stop offset="0.55" stopColor="#DB2777" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="27" stroke="url(#mark-g)" strokeOpacity="0.32" strokeWidth="1.1" />
      {dots.map(([x, y], i) => (
        <g key={i}>
          <line
            x1="32"
            y1="32"
            x2={x}
            y2={y}
            stroke="url(#mark-g)"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
          <circle cx={x} cy={y} r={i % 2 === 0 ? 2.6 : 2} fill="url(#mark-g)" />
        </g>
      ))}
      <circle cx="32" cy="32" r="4.4" fill="#EC4899" />
      <circle cx="32" cy="32" r="8.4" stroke="#EC4899" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-lg"
      aria-label="Jamhooriyat Saheliyan — home"
    >
      <Mark className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[24deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.02rem] font-bold tracking-tight text-ink">
          {compact ? "Saheliyan" : "Jamhooriyat Saheliyan"}
        </span>
        <span className="mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.2em] text-orchid/80 sm:block">
          Feminist civic technology
        </span>
      </span>
    </Link>
  );
}
