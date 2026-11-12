import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-plum py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]"
      />
      <div className="shell relative z-10 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-5 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-tight text-ivory">
          This page is not here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-ivory/60">
          The link may be old, or the page may have moved. The information is still out there — let
          us help you find it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-pink">
            Back to home
          </Link>
          <Link href="/technology" className="btn btn-ghost">
            Explore the technology
          </Link>
        </div>
      </div>
    </section>
  );
}
