import Link from "next/link";
import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/partners");

const partnerTypes = [
  {
    who: "Funder or climate fund",
    how: "Support locally led, gender-responsive information access and accountability work, and help us document results.",
  },
  {
    who: "UN agency or development organisation",
    how: "Align with gender, governance and climate programmes; share learning across communities.",
  },
  {
    who: "Research institution",
    how: "Evaluate outcomes, test the theory of change, strengthen language and AI approaches. Three university partnerships already exist.",
  },
  {
    who: "Technology or AI-for-good partner",
    how: "Strengthen language support, safety and secure data practices for low-literacy users.",
  },
  {
    who: "Feminist and civic tech networks",
    how: "Exchange methods, tools and lessons.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageSchema path="/partners" />
      <PageHero
        eyebrow="Partners and collaborate"
        title="Building the future of inclusive digital democracy."
        intro="We are looking for partners who believe that technology should widen who takes part in public life, and who are willing to learn with us in the open."
        image="partnersGroup"
      >
        <div className="flex flex-wrap gap-3">
          <a href="#collaborate" className="btn btn-pink">
            Start a conversation
          </a>
          <Link href="/impact" className="btn btn-ghost">
            See the evidence
          </Link>
        </div>
      </PageHero>

      {/* Who you are / how we work */}
      <section className="on-light py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to work together"
              tone="light"
              title="You are a…"
              intro="Tell us which of these describes you, and we will come with a specific proposal rather than a general pitch."
            />
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-plum/10 bg-white">
            <table className="w-full text-left">
              <caption className="sr-only">Partner types and how we can work together</caption>
              <thead>
                <tr className="border-b border-plum/10 bg-plum/4 text-[0.66rem] uppercase tracking-[0.14em] text-plum/65">
                  <th scope="col" className="px-6 py-3.5 font-semibold">
                    You are a…
                  </th>
                  <th scope="col" className="px-6 py-3.5 font-semibold">
                    How we can work together
                  </th>
                </tr>
              </thead>
              <tbody>
                {partnerTypes.map((p) => (
                  <tr key={p.who} className="group border-b border-plum/6 last:border-0">
                    <td className="w-[38%] px-6 py-5 align-top">
                      <span className="font-display text-[1rem] font-semibold leading-snug text-plum">
                        {p.who}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-[0.92rem] leading-relaxed text-plum/65">
                      {p.how}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[0.78rem] leading-relaxed text-plum/65">
              Three university partnerships exist today. Named partners and logos are published
              only once confirmed in writing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo band */}
      <section className="bg-plum py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal>
              <Photo
                slot="partnersRoom"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
                caption
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Photo
                slot="partnersTalk"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <Photo
                slot="extraFour"
                aspect="4/5"
                sizes="(max-width: 640px) 92vw, 30vw"
                rounded="rounded-[1.2rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section id="collaborate" className="relative scroll-mt-20 overflow-hidden bg-plum-deep py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[150px]"
        />
        <div className="shell relative z-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Call to action"
                  title="Work with us."
                  intro="Tell us what you would like to build, fund or learn together. We reply to every serious enquiry, and we will tell you honestly if it is not a fit."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 space-y-4 border-t border-rose/12 pt-7">
                  <ContactRow label="Email" value={site.email} href={`mailto:${site.email}`} />
                  <ContactRow
                    label="Media"
                    value={site.pressEmail}
                    href={`mailto:${site.pressEmail}`}
                  />
                  <ContactRow label="Based in" value={site.address} />
                  <ContactRow label="Office hours" value={site.officeHours} />
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 rounded-xl border border-rose/15 bg-plum/40 p-5">
                  <p className="text-[0.8rem] leading-relaxed text-ivory/65">
                    We collect only what is needed to respond. We do not sell or share your details.
                    Women using our service can ask us to delete their data at any time.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-rose/15 bg-plum/50 p-6 backdrop-blur sm:p-8">
                <h2 className="font-display text-xl font-semibold text-ivory">
                  Tell us about your interest
                </h2>
                <p className="mt-1.5 text-[0.85rem] text-ivory/62">
                  A short message is enough to start.
                </p>
                <div className="mt-6">
                  <ContactForm variant="partner" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Due diligence */}
      <section className="on-ivory-warm py-20 md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Due diligence"
                tone="light"
                title="What we can share before you commit."
              />
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Reporting sheets", "The underlying data behind every published figure."],
                ["Method notes", "How participation and reports were counted."],
                ["Consent records", "The permission behind every photo and quote."],
                ["Governance", "Who decides, who holds the data, and how access is logged."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="rounded-xl border border-plum/10 bg-white p-5">
                    <p className="font-display text-[0.95rem] font-semibold text-plum">{t}</p>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-plum/65">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-orchid-light">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="link-underline break-all text-right text-[0.9rem] text-ivory/75 hover:text-ivory"
        >
          {value}
        </a>
      ) : (
        <span className="text-right text-[0.9rem] text-ivory/60">{value}</span>
      )}
    </div>
  );
}
