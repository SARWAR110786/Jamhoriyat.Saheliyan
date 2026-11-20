"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import Logo from "./Logo";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel on navigation and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-rose/10 bg-white/90 shadow-[0_8px_30px_-20px_rgba(190,24,93,0.35)] backdrop-blur-xl"
          : "border-b border-ink/5 bg-white/85 backdrop-blur-xl"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-underline text-[0.88rem] font-medium transition-colors ${
                  active ? "text-rose" : "text-ink/75 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/partners#collaborate" className="btn btn-pink hidden sm:inline-flex">
            Work With Us
            <Arrow />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose/25 text-ink transition-colors hover:border-rose/60 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-rose/10 bg-plum/97 px-5 pb-10 pt-6 backdrop-blur-2xl lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {[...nav, { label: "Contact", href: "/contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between border-b border-rose/10 py-4 font-display text-2xl font-semibold text-ink"
            >
              {item.label}
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-orchid-light">
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>
        {site.whatsappLink && (
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost mt-8 w-full"
          >
            Get help on WhatsApp
          </a>
        )}
        <Link href="/partners#collaborate" className="btn btn-pink mt-3 w-full">
          Work With Us
          <Arrow />
        </Link>
        <p className="mt-6 text-sm leading-relaxed text-ink/65">
          Free to use. English, Urdu and Sindhi. No app to install.
        </p>
      </div>
    </header>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h9.5M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
