import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
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

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Information is power`,
    template: `%s | ${site.name}`,
  },
  description:
    "Jamhooriyat Saheliyan is a women-led feminist civic technology initiative in Pakistan, helping rural women access public information, use their right to information and shape climate governance.",
  keywords: [
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
    title: `${site.name} — Information is power`,
    description:
      "Community-rooted, accessible technology that helps rural women in Sindh access public information, take part in democracy and shape climate governance.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Information is power`,
    description:
      "Community-rooted, accessible technology that helps rural women in Sindh access public information, take part in democracy and shape climate governance.",
    images: ["/og.png"],
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
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable}`}>
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
