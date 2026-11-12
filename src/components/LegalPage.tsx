import type { ReactNode } from "react";
import Link from "next/link";
import NetworkCanvas from "./NetworkCanvas";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-plum pb-14 pt-32 md:pt-40">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <NetworkCanvas />
        </div>
        <div className="shell relative z-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2rem,4.8vw,3.4rem)] font-bold leading-[1.05] text-ivory">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-ivory/65">{intro}</p>
          )}
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose/20 px-3 py-1.5 text-[0.7rem] text-ivory/62">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Last updated: {updated} · pending legal review
          </p>
        </div>
      </section>

      <section className="on-light py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-violet">
                Related
              </p>
              <nav className="mt-4 flex flex-col gap-2 text-[0.86rem]">
                {[
                  ["Privacy and data protection", "/privacy"],
                  ["Safeguarding", "/safeguarding"],
                  ["Accessibility", "/accessibility"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="link-underline w-fit text-plum/65 hover:text-plum"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </aside>
            <div className="max-w-2xl space-y-8 text-[0.98rem] leading-[1.8] text-plum/75">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[1.2rem] font-semibold text-plum">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-violet/10 px-1.5 py-0.5 font-medium text-violet ring-1 ring-inset ring-violet/20">
      {children}
    </span>
  );
}
