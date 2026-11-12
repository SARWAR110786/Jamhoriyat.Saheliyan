import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Women-led feminist civic technology initiative in Pakistan, helping rural women access public information, use their right to information and shape climate governance.",
    start_url: "/",
    display: "standalone",
    background_color: "#2A0F3D",
    theme_color: "#2A0F3D",
    lang: "en-PK",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
