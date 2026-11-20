import type { ReactNode } from "react";
import NetworkCanvas from "./NetworkCanvas";
import Photo from "./Photo";
import type { PhotoSlot } from "@/content/photos";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: PhotoSlot;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-plum pb-16 pt-32 md:pb-20 md:pt-40">
      <div aria-hidden className="absolute inset-0 opacity-45">
        <NetworkCanvas />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-pink/10 blur-[130px]"
      />
      <div className="shell relative z-10">
        <div className={image ? "grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]" : ""}>
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.4vw,4rem)] font-bold leading-[1.02] text-ink">
              {title}
            </h1>
            {intro && (
              <div className="mt-6 max-w-2xl text-pretty text-[1.06rem] leading-relaxed text-ink/68">
                {intro}
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {image && (
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.8rem] border border-rose/15"
              />
              <Photo
                slot={image}
                className="relative"
                sizes="(max-width: 1024px) 100vw, 40vw"
                aspect="4/5"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
