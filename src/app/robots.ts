import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { AI_BOTS } from "@/content/bots";

/**
 * Search engines may index the site; AI crawlers may not read any of it.
 * robots.txt is a request that well-behaved bots follow. Bots that ignore it
 * are refused by the server in src/middleware.ts.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [...AI_BOTS],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/photo-review"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
