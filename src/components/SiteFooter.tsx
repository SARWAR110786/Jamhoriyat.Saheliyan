import Link from "next/link";
import { nav, secondaryNav, site } from "@/content/site";
import Logo from "./Logo";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-rose/10 bg-plum-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[26rem] w-[26rem] rounded-full bg-pink/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[22rem] w-[22rem] rounded-full bg-pink/12 blur-[120px]"
      />

      <div className="shell relative z-10 pb-28 pt-16 md:pb-24 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
              A free WhatsApp service that helps women in Sindh get answers from government offices,
              use their right to information and take part in climate decisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.social.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="rounded-full border border-rose/20 px-3.5 py-1.5 text-xs text-ink/70 transition-colors hover:border-rose/50 hover:text-ink"
                  >
                    {s.label}
                  </a>
                ) : (
                  <span
                    key={s.label}
                    className="rounded-full border border-dashed border-rose/20 px-3.5 py-1.5 text-xs text-ink/60"
                    title="Link to be supplied by the team before launch"
                  >
                    {s.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <FooterCol title="Explore">
            {[...nav, ...secondaryNav].map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Trust and safety">
            <FooterLink href="/privacy">Privacy and data protection</FooterLink>
            <FooterLink href="/safeguarding">Safeguarding</FooterLink>
            <FooterLink href="/accessibility">Accessibility statement</FooterLink>
            <FooterLink href="/contact">Ask us to delete your data</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            {site.whatsappLink && (
              <li>
                <a
                  href={site.whatsappLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-underline text-sm font-semibold text-rose hover:text-pink-deep"
                >
                  WhatsApp: get help
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-underline break-all text-sm text-ink/70 hover:text-ink"
              >
                {site.email}
              </a>
            </li>
            <li className="text-sm text-ink/65">{site.address}</li>
            <li className="text-sm text-ink/65">{site.officeHours}</li>
            <li className="pt-2">
              <Link href="/partners#collaborate" className="btn btn-ghost !px-4 !py-2.5 !text-xs">
                Work With Us
              </Link>
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-rose/10 pt-7 text-xs text-ink/62 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Text, photos and design may not be copied, scraped
              or used to train AI without written permission.
          </p>
          <p className="max-w-xl md:text-right">
            Impact figures are initiative-reported. Every figure carries a reporting period and a
            methodology note on the{" "}
            <Link href="/impact" className="text-rose/80 underline underline-offset-2">
              Our Impact
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-orchid-light">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-underline text-sm text-ink/70 hover:text-ink">
        {children}
      </Link>
    </li>
  );
}
