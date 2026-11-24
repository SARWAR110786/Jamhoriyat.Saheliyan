import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * One source of truth for page titles, descriptions and breadcrumb labels.
 *
 * Both the `<head>` metadata (`pageMetadata`) and the JSON-LD
 * (`pageSchema` in `src/lib/schema.ts`) read from this map, so a page can
 * never disagree with its own structured data.
 */

export const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 630, type: "image/jpeg" } as const;

export type PageKey =
  | "/about"
  | "/accessibility"
  | "/climate-justice"
  | "/contact"
  | "/gallery"
  | "/impact"
  | "/partners"
  | "/privacy"
  | "/safeguarding"
  | "/stories"
  | "/technology"
  | "/women-ai-democracy";

type PageSeo = {
  /** Page title without the site name; the root template adds it. */
  title: string;
  description: string;
  /** Short label used in the breadcrumb trail. */
  label: string;
};

export const pageSeo: Record<PageKey, PageSeo> = {
  "/about": {
    title: "About Us",
    description:
      "Jamhooriyat Saheliyan is a women-centred civic technology initiative working with rural women in Sindh, Pakistan. Our vision, mission, values and theory of change.",
    label: "About",
  },
  "/accessibility": {
    title: "Accessibility",
    description:
      "Our accessibility commitments: keyboard navigation, visible focus, contrast, alt text, captions and reduced-motion support.",
    label: "Accessibility",
  },
  "/climate-justice": {
    title: "Climate Justice and Governance",
    description:
      "How access to information supports local climate accountability and gender-responsive governance in climate-affected communities in Sindh.",
    label: "Climate justice",
  },
  "/contact": {
    title: "Contact",
    description:
      "Contact Jamhooriyat Saheliyan about partnership, research, media or support with the service. We collect only what is needed to respond.",
    label: "Contact",
  },
  "/gallery": {
    title: "Photo archive",
    description:
      "Every photograph supplied by the Jamhooriyat Saheliyan team: community sessions, co-creation workshops and the women behind the work in Sindh.",
    label: "Photo archive",
  },
  "/impact": {
    title: "Our Impact",
    description:
      "Initiative-reported figures with reporting periods and methodology notes: women co-creating, RTI engagement, civic network membership, chatbot reports and university partnerships.",
    label: "Impact",
  },
  "/partners": {
    title: "Partners and Collaborate",
    description:
      "Work with Jamhooriyat Saheliyan: funding, UN and development partnerships, research and evaluation, AI-for-good collaboration, and feminist civic tech networks.",
    label: "Partners",
  },
  "/privacy": {
    title: "Privacy and data protection",
    description:
      "How Jamhooriyat Saheliyan collects, stores, uses and deletes data from women using the WhatsApp service and from people contacting us.",
    label: "Privacy",
  },
  "/safeguarding": {
    title: "Safeguarding",
    description:
      "Our safeguarding commitments for women and communities taking part in Jamhooriyat Saheliyan, including consent, escalation and reporting a concern.",
    label: "Safeguarding",
  },
  "/stories": {
    title: "Stories and Knowledge Hub",
    description:
      "Community stories, explainers, research and policy briefs on feminist AI, women in democratic governance, climate justice and digital rights.",
    label: "Stories",
  },
  "/technology": {
    title: "Our Technology",
    description:
      "How the WhatsApp-based AI and Right to Information support service works: who it is for, how to access it, what it can and cannot do, and how your data is protected.",
    label: "Technology",
  },
  "/women-ai-democracy": {
    title: "Women, AI and Democracy",
    description:
      "Why information access is the first condition of democratic participation, and how Jamhooriyat Saheliyan treats AI as a way to lower barriers — never as a substitute for women's judgement.",
    label: "Women, AI and democracy",
  },
};

/**
 * Metadata for an inner page: title, description, canonical, Open Graph and
 * Twitter card all derived from `pageSeo`.
 *
 * Without this, every page inherits the home page's Open Graph block, so a
 * link to /impact would preview the home page headline.
 */
export function pageMetadata(path: PageKey): Metadata {
  const { title, description } = pageSeo[path];
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: socialTitle,
      description,
      images: [{ ...OG_IMAGE, alt: `${site.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
