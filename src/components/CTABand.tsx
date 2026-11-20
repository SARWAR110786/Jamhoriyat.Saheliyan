import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand({
  eyebrow = "Partners and invitation",
  title = "Work with us.",
  body = "Tell us what you would like to build, fund or learn together. We are looking for partners who believe technology should widen who takes part in public life — and who are willing to learn with us in the open.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-[140px]"
      />
      <div className="shell relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">{eyebrow}</p>
            <h2 className="mt-5 text-balance text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.04] text-ink">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-ink/65">{body}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/partners#collaborate" className="btn btn-pink">
                Start a conversation
              </Link>
              <Link href="/impact" className="btn btn-ghost">
                See our impact
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
