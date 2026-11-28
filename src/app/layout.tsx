import type { Metadata, Viewport } from "next";
// Fonts are bundled with the site (Fontsource packages) instead of being
// downloaded from Google Fonts during the build, which can fail on the host.
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";
import StructuredData from "@/components/StructuredData";
import { site } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Free WhatsApp RTI chatbot for women in Sindh`,
    template: `%s | ${site.name}`,
  },
  description:
    "Jamhooriyat Saheliyan (جمہوریت سہیلیاں) is a women-led initiative in Sindh, Pakistan. Our free WhatsApp AI chatbot helps women ask government offices about water, schools, hospitals and development, and writes their Right to Information (RTI) application in English, Urdu or Sindhi.",
  keywords: [
    "Jamhooriyat Saheliyan",
    "Jamhoriyat Saheliyan",
    "RTI chatbot",
    "WhatsApp RTI",
    "right to information Sindh",
    "Sindh Transparency and RTI Act 2016",
    "feminist civic technology",
    "right to information",
    "rural women Sindh",
    "climate justice Pakistan",
    "gender-responsive governance",
    "responsible AI",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "nonprofit",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Your right to know, now on WhatsApp`,
    description:
      "A free AI chatbot that helps women in Sindh ask government offices and writes the RTI application for you. English, Urdu and Sindhi.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Jamhooriyat Saheliyan — Your right to know, now on WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Your right to know, now on WhatsApp`,
    description:
      "A free AI chatbot that helps women in Sindh ask government offices and writes the RTI application for you. English, Urdu and Sindhi.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Ask AI tools not to use this content (honoured by some crawlers and
  // image tools; search indexing is unaffected).
  other: {
    "tdm-reservation": "1",
  },
  alternates: {
    canonical: "/",
    languages: { "en-PK": "/" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/**
 * Always serve fresh HTML. Static pages were cached by the host CDN for a year,
 * so after a deploy some visitors got an old page pointing at deleted JS files
 * ("Application error: a client-side exception has occurred").
 */
export const dynamic = "force-dynamic";

/** If a JS chunk from an older deploy is missing, reload once to get the new page. */
const CHUNK_RECOVERY = `(function(){function bad(m){return /ChunkLoadError|Loading chunk|Loading CSS chunk|Failed to fetch dynamically imported module|_next\\/static/i.test(String(m||""))}
function go(){try{var k="js-reloaded",t=Date.now(),p=+sessionStorage.getItem(k)||0;if(t-p<30000)return;sessionStorage.setItem(k,String(t))}catch(e){}location.reload()}
addEventListener("error",function(e){var s=e.target&&(e.target.src||e.target.href);if(bad(e.message)||(s&&/\\/_next\\/static\\//.test(s)))go()},true);
addEventListener("unhandledrejection",function(e){var r=e.reason;if(bad(r&&(r.name+" "+r.message)))go()})})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: CHUNK_RECOVERY }} />
      </head>
      <body className="min-h-dvh bg-plum font-sans text-ink antialiased">
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pink-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
