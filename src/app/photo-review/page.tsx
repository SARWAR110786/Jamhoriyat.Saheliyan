import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photo review (internal)",
  robots: { index: false, follow: false },
};

type Entry = {
  id: string;
  orientation: string;
  w: number;
  h: number;
};

function readManifest(): Entry[] {
  try {
    const file = path.join(process.cwd(), "public", "photos", "manifest.json");
    return JSON.parse(fs.readFileSync(file, "utf8")) as Entry[];
  } catch {
    return [];
  }
}

export default function PhotoReviewPage() {
  const all = readManifest();
  const slots = Object.entries(photos);

  return (
    <div className="min-h-screen bg-plum pt-28">
      <div className="shell pb-24">
        <p className="eyebrow">Internal · not indexed</p>
        <h1 className="mt-4 text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-ivory">
          Photo review
        </h1>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ivory/60">
          Every image slot used on the site, with its source file. Confirm the subject, rewrite the
          alt text and caption to match what is actually in the frame, then tick consent in{" "}
          <code className="rounded bg-plum-soft px-1.5 py-0.5 text-[0.8rem] text-rose">
            src/content/photos.ts
          </code>
          . Nothing should ship with <strong>consent: false</strong>.
        </p>

        <div className="mt-8 rounded-xl border border-pink/30 bg-pink/8 p-4 text-[0.82rem] leading-relaxed text-rose/85">
          {slots.filter(([, p]) => !p.consent).length} of {slots.length} slots still need consent
          confirmed.
        </div>

        <h2 className="mt-14 font-display text-xl font-semibold text-ivory">Slots in use</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map(([key, p]) => (
            <figure
              key={key}
              className="overflow-hidden rounded-xl border border-rose/15 bg-plum-soft/30"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/photos/thumbs/${p.id}.webp`}
                alt={p.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-4">
                <p className="flex items-center justify-between gap-2">
                  <code className="text-[0.75rem] font-semibold text-rose">{key}</code>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider ${
                      p.consent
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-pink/15 text-rose"
                    }`}
                  >
                    {p.consent ? "consent" : "no consent"}
                  </span>
                </p>
                <p className="mt-2 break-all text-[0.68rem] text-ivory/60">{p.id}</p>
                <p className="mt-2 text-[0.75rem] leading-relaxed text-ivory/65">{p.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <h2 className="mt-16 font-display text-xl font-semibold text-ivory">
          All converted images ({all.length})
        </h2>
        <p className="mt-2 text-[0.82rem] text-ivory/62">
          Every file from the Photos folder, converted to WebP. Use an id from here in
          <code className="mx-1 rounded bg-plum-soft px-1.5 py-0.5 text-rose">photos.ts</code>.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
          {all.map((e) => (
            <div key={e.id} className="group relative overflow-hidden rounded-lg bg-plum-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/photos/thumbs/${e.id}.webp`}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 truncate bg-plum/80 px-1 py-0.5 text-[0.52rem] text-rose/70">
                {e.id.slice(0, 4)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
