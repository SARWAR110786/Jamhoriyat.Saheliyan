import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Shared, simple building blocks for the inner pages (About, Technology,
 * Impact, Stories, Partners). Photos are referenced by file id in
 * /public/photos — use the high-resolution ones (iPhone originals or
 * 1600px files) for heroes and large images.
 */

/** Full-width photo hero with a pink overlay, like the home page. */
export function PhotoHero({
  photo,
  alt,
  eyebrow,
  title,
  intro,
  children,
  focus = "50% 50%",
}: {
  photo: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  focus?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#5b0a33] pb-16 pt-32 md:min-h-[78vh] md:pb-24">
      <Image
        src={`/photos/${photo}.webp`}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: focus }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(74,6,40,0.9)_0%,rgba(122,14,66,0.72)_48%,rgba(190,24,93,0.25)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[rgba(60,5,32,0.55)] to-transparent" />
      <div className="shell">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,4.8rem)] font-semibold leading-[1.02] text-white">{title}</h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed text-white/90">{intro}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/** A photo at full quality, in a rounded frame with a fixed aspect ratio. */
export function Pic({
  photo,
  alt,
  aspect = "4/3",
  sizes = "(max-width: 1024px) 92vw, 46vw",
  focus = "50% 50%",
  className = "",
  rounded = "rounded-[1.4rem]",
}: {
  photo: string;
  alt: string;
  aspect?: string;
  sizes?: string;
  focus?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#f6eef2] ${rounded} ${className}`} style={{ aspectRatio: aspect }}>
      <Image
        src={`/photos/${photo}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
        style={{ objectPosition: focus }}
      />
    </div>
  );
}

/** Centred section title, used on every inner page. */
export function Title({
  eyebrow,
  title,
  intro,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={
          light
            ? "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/70"
            : `eyebrow ${align === "center" ? "justify-center" : ""}`
        }
      >
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-[clamp(2.1rem,4.4vw,3.3rem)] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-[1.04rem] leading-relaxed ${light ? "text-white/80" : "text-ink/70"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Simple, friendly closing band with a WhatsApp + one secondary action. */
export function EndBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body: ReactNode;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#6d0b3c_0%,#9d174d_55%,#be185d_100%)] px-6 py-14 text-center text-white sm:px-12 md:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-[clamp(2rem,4.4vw,3.2rem)] text-white">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[1.04rem] leading-relaxed text-white/85">{body}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={primary.href}
              {...(primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn bg-white text-[#9d174d] hover:-translate-y-0.5 hover:bg-[#fff1f6]"
            >
              {primary.label}
            </a>
            {secondary && (
              <a href={secondary.href} className="btn border border-white/60 text-white hover:-translate-y-0.5 hover:bg-white/10">
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
