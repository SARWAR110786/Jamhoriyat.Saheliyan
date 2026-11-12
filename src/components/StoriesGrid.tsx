"use client";

import { useMemo, useState } from "react";
import Photo from "./Photo";
import { stories, storyCategories } from "@/content/stories";

const categories = storyCategories;

export default function StoriesGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? stories : stories.filter((s) => s.category === active)),
    [active],
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter stories by topic">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-1.5 text-[0.78rem] font-medium transition-colors ${
                on
                  ? "border-pink-deep bg-pink-deep text-white"
                  : "border-rose/20 text-ivory/65 hover:border-rose/50 hover:text-ivory"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-[0.75rem] text-ivory/60" aria-live="polite">
        {visible.length} {visible.length === 1 ? "entry" : "entries"}
        {active !== "All" && ` in ${active}`}
      </p>

      {/* Grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((s, i) => (
          <article
            key={s.title}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-rose/12 bg-plum-soft/30 transition-all duration-500 hover:-translate-y-1 hover:border-orchid/40 ${
              s.featured && active === "All" ? "md:col-span-2 lg:col-span-2" : ""
            }`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <Photo
              slot={s.slot}
              aspect={s.featured && active === "All" ? "16/8" : "16/10"}
              sizes="(max-width: 768px) 100vw, 33vw"
              rounded="rounded-none"
            />
            <div className="flex flex-1 flex-col p-5">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-orchid-light">
                {s.category}
              </p>
              <h3 className="mt-2.5 text-balance font-display text-[1.12rem] font-semibold leading-snug text-ivory">
                {s.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-ivory/65">
                {s.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-rose/10 pt-3.5 text-[0.7rem] text-ivory/60">
                <span>{s.date}</span>
                <span>{s.read} read</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 rounded-xl border border-dashed border-rose/20 p-8 text-center text-sm text-ivory/62">
          Nothing published in this section yet.
        </p>
      )}
    </div>
  );
}
