/**
 * Who may read the site automatically.
 *
 * - Search engines (Google, Bing) and link-preview bots (WhatsApp, Facebook,
 *   LinkedIn, X, Telegram, Slack) are ALLOWED, so the site can be found and
 *   shared with a proper preview.
 * - AI training / AI answer crawlers and generic scraping tools are BLOCKED:
 *   asked to stay away in robots.txt, and refused by the server (403) in
 *   src/middleware.ts even if they ignore robots.txt.
 *
 * Matching is case-insensitive on the User-Agent header.
 */

/** AI crawlers: listed by name in robots.txt and refused by the server. */
export const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "Google-CloudVertexBot",
  "GoogleOther",
  "Applebot-Extended",
  "CCBot",
  "PerplexityBot",
  "Perplexity-User",
  "Bytespider",
  "meta-externalagent",
  "meta-externalfetcher",
  "FacebookBot",
  "Amazonbot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "Diffbot",
  "omgili",
  "omgilibot",
  "YouBot",
  "AI2Bot",
  "Ai2Bot-Dolma",
  "img2dataset",
  "Timpibot",
  "ImagesiftBot",
  "PetalBot",
  "Kangaroo Bot",
  "DuckAssistBot",
  "MistralAI-User",
  "Webzio-Extended",
  "TikTokSpider",
  "iaskspider",
  "Scrapy",
] as const;

/** Generic scraping / download tools refused by the server (not real browsers). */
export const SCRAPER_TOOLS = [
  "python-requests",
  "python-urllib",
  "aiohttp",
  "httpx",
  "scrapy",
  "curl/",
  "wget",
  "libwww-perl",
  "Go-http-client",
  "okhttp",
  "Java/",
  "Apache-HttpClient",
  "node-fetch",
  "axios/",
  "undici",
  "HTTrack",
  "SiteSucker",
  "WebCopier",
  "Offline Explorer",
  "Teleport",
  "WebZIP",
  "HeadlessChrome",
  "PhantomJS",
  "Puppeteer",
  "Playwright",
  "Selenium",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "serpstatbot",
  "magpie-crawler",
  "ZoominfoBot",
] as const;

/** Always allowed, even if a string above happens to appear in their UA. */
export const ALLOWED_BOTS = [
  "Googlebot",
  "Google-InspectionTool",
  "AdsBot-Google",
  "Storebot-Google",
  "bingbot",
  "DuckDuckBot",
  "YandexBot",
  "Applebot/",
  "facebookexternalhit",
  "facebookcatalog",
  "WhatsApp",
  "LinkedInBot",
  "Twitterbot",
  "TelegramBot",
  "Slackbot",
  "Discordbot",
  "Pinterestbot",
  "SkypeUriPreview",
] as const;

const lower = (list: readonly string[]) => list.map((s) => s.toLowerCase());
const AI = lower(AI_BOTS);
const TOOLS = lower(SCRAPER_TOOLS);
const ALLOW = lower(ALLOWED_BOTS);

/**
 * True when this User-Agent should be refused. An empty User-Agent is let
 * through on purpose: the hosting platform's own health checks may send none.
 */
export function isBlockedAgent(userAgent: string | null): boolean {
  const ua = (userAgent ?? "").toLowerCase().trim();
  if (!ua) return false;
  if (ALLOW.some((a) => ua.includes(a))) return false;
  return AI.some((b) => ua.includes(b)) || TOOLS.some((t) => ua.includes(t));
}
