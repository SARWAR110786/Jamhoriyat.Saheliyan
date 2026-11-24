import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond, Public_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";
import StructuredData from "@/components/StructuredData";
import { site } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Elegant serif for big headings (h1/h2), in the spirit of mehfooz.ai.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

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
  alternates: {
    canonical: "/",
    languages: { "en-PK": "/" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${cormorant.variable} ${publicSans.variable}`}>
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
