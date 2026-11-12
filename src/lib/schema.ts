import { site } from "@/content/site";
import { pageSeo, type PageKey } from "./seo";

/**
 * JSON-LD builders.
 *
 * Only facts the site itself states are included: name, URL, languages the
 * service actually supports, and the region it works in. No legal status,
 * founding date, address, phone number or social profile is invented — social
 * links are added only when a real URL is set in `src/content/site.ts`.
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

const socialLinks = site.social
  .map((entry) => entry.href)
  .filter((href): href is string => Boolean(href));

const DESCRIPTION =
  "Women-led feminist civic technology initiative in Pakistan, helping rural women access public information, use their right to information and shape climate governance.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${site.url}/og.png`,
    description: DESCRIPTION,
    foundingLocation: {
      "@type": "Place",
      name: "Sindh, Pakistan",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    knowsLanguage: ["en", "ur", "sd"],
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: DESCRIPTION,
    inLanguage: "en-PK",
    publisher: { "@id": ORG_ID },
  };
}

/** WebPage + BreadcrumbList for one inner page. */
export function pageSchema(path: PageKey) {
  const { title, description, label } = pageSeo[path];

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${site.url}${path}#webpage`,
      url: `${site.url}${path}`,
      name: `${title} | ${site.name}`,
      description,
      inLanguage: "en-PK",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: label,
          item: `${site.url}${path}`,
        },
      ],
    },
  ];
}
