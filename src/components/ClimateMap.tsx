"use client";

import { useState } from "react";

/**
 * Climate and accountability map — a CONCEPT, per the brief (p.6).
 * Positions are illustrative and must be replaced with verified community
 * data before launch. The component says so on the face of it.
 */
const communities = [
  {
    id: "c1",
    name: "Community A",
    x: 22,
    y: 34,
    issue: "Drinking water supply is intermittent and the repair schedule is not published.",
    route: ["Union Council", "District Water Office"],
  },
  {
    id: "c2",
    name: "Community B",
    x: 41,
    y: 62,
    issue: "Flood relief allocations for the village are not listed anywhere residents can see.",
    route: ["Union Council", "District Relief Office"],
  },
  {
    id: "c3",
    name: "Community C",
    x: 63,
    y: 28,
    issue: "A school repair budget was announced but work has not started.",
    route: ["School Management Committee", "District Education Office"],
  },
  {
    id: "c4",
    name: "Community D",
    x: 78,
    y: 66,
    issue: "Adaptation spending planned for this union council is unknown to residents.",
    route: ["Union Council", "District Planning Office"],
  },
];

const office = { x: 50, y: 47, label: "District office" };

export default function ClimateMap() {
  const [active, setActive] = useState<string | null>(communities[0].id);
  const current = communities.find((c) => c.id === active) ?? null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative overflow-hidden rounded-2xl border border-rose/15 bg-plum-deep">
        <svg
          viewBox="0 0 100 88"
          className="block h-full w-full"
          role="group"
          aria-label="Concept map of community points and the route a question takes to a district office"
        >
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M6 0H0V6" fill="none" stroke="#BE185D" strokeOpacity="0.05" strokeWidth="0.3" />
            </pattern>
          </defs>

          <rect width="100" height="88" fill="url(#grid)" />
          <rect width="100" height="88" fill="url(#mapGlow)" />

          {/* stylised landmass */}
          <path
            d="M14 26 C22 16 38 12 52 15 C68 18 80 14 86 24 C91 33 88 45 84 54 C80 64 84 72 74 78 C63 84 48 82 38 78 C27 74 16 70 13 58 C10 47 8 34 14 26 Z"
            fill="#F9A8D4"
            fillOpacity="0.10"
            stroke="#DB2777"
            strokeOpacity="0.28"
            strokeWidth="0.45"
          />
          {/* river */}
          <path
            d="M30 12 C34 26 27 38 33 50 C39 62 32 72 36 84"
            fill="none"
            stroke="#DB2777"
            strokeOpacity="0.35"
            strokeWidth="0.5"
            strokeDasharray="2 1.6"
          />

          {/* route from active community to office */}
          {current && (
            <line
              x1={current.x}
              y1={current.y}
              x2={office.x}
              y2={office.y}
              stroke="#EC4899"
              strokeWidth="0.6"
              strokeDasharray="1.6 1.2"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-14"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </line>
          )}

          {/* office */}
          <g>
            <circle cx={office.x} cy={office.y} r="3.4" fill="#BE185D" fillOpacity="0.14" />
            <rect
              x={office.x - 1.6}
              y={office.y - 1.6}
              width="3.2"
              height="3.2"
              transform={`rotate(45 ${office.x} ${office.y})`}
              fill="#BE185D"
            />
            <text
              x={office.x}
              y={office.y + 6.4}
              textAnchor="middle"
              fontSize="2.5"
              fill="#BE185D"
              fillOpacity="0.75"
              fontFamily="var(--font-public)"
            >
              District office
            </text>
          </g>

          {/* communities */}
          {communities.map((c) => {
            const on = c.id === active;
            return (
              <g
                key={c.id}
                role="button"
                tabIndex={0}
                aria-pressed={on}
                aria-label={`${c.name}: ${c.issue}`}
                onClick={() => setActive(c.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(c.id);
                  }
                }}
                className="cursor-pointer outline-none"
              >
                <circle cx={c.x} cy={c.y} r="6" fill="transparent" />
                {on && (
                  <circle cx={c.x} cy={c.y} r="4.2" fill="#EC4899" fillOpacity="0.18">
                    <animate
                      attributeName="r"
                      values="3.4;5.6;3.4"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      values="0.28;0.06;0.28"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={on ? 2.1 : 1.5}
                  fill={on ? "#EC4899" : "#DB2777"}
                  stroke={on ? "#BE185D" : "transparent"}
                  strokeWidth="0.4"
                />
                <text
                  x={c.x}
                  y={c.y - 3.4}
                  textAnchor="middle"
                  fontSize="2.3"
                  fill="#BE185D"
                  fillOpacity={on ? 0.95 : 0.55}
                  fontFamily="var(--font-public)"
                  fontWeight={on ? 600 : 400}
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>

        <span className="absolute left-4 top-4 rounded-full border border-rose/25 bg-plum/70 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-rose/80 backdrop-blur">
          Concept
        </span>
      </div>

      <div className="rounded-2xl border border-rose/15 bg-plum-soft p-6">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
          Selected community
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
          {current?.name ?? "Choose a point"}
        </h3>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/65">
          {current?.issue ??
            "Tap a community point to see the local issue and the route a question would take to the responsible office."}
        </p>

        {current && (
          <div className="mt-6">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
              Route of a question
            </p>
            <ol className="mt-3 space-y-0">
              {["She asks", ...current.route].map((step, i, arr) => (
                <li key={step} className="relative flex gap-3 pb-5 last:pb-0">
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[0.42rem] top-4 h-full w-px bg-rose/20"
                    />
                  )}
                  <span
                    aria-hidden
                    className="relative mt-1 h-3.5 w-3.5 shrink-0 rounded-full border border-rose/40 bg-plum"
                  >
                    <span className="absolute inset-[3px] rounded-full bg-pink/80" />
                  </span>
                  <span className="text-[0.88rem] leading-relaxed text-ink/70">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <p className="mt-6 border-t border-rose/12 pt-4 text-[0.7rem] leading-relaxed text-ink/60">
          Positions are illustrative. This map will show verified community data only. No community
          data is displayed until it has been collected with consent.
        </p>
      </div>
    </div>
  );
}
