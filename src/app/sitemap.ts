import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Bump this date when page content actually changes. Using `new Date()` on
 * every build tells search engines that every page changed on every deploy,
 * which is not true.
 */
const LAST_UPDATED = new Date("2026-11-12T00:00:00.000Z");

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/technology", priority: 0.9, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/women-ai-democracy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/climate-justice", priority: 0.7, changeFrequency: "monthly" },
  { path: "/stories", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/safeguarding", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? site.url : `${site.url}${route.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
