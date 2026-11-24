import { NextResponse, type NextRequest } from "next/server";
import { isBlockedAgent } from "@/content/bots";

/**
 * Refuse AI crawlers and scraping tools, even when they ignore robots.txt.
 * Real visitors, search engines and link-preview bots are never affected
 * (see the allow list in src/content/bots.ts).
 */
export function middleware(req: NextRequest) {
  // robots.txt stays readable for everyone, so every bot can see the rules.
  if (req.nextUrl.pathname === "/robots.txt") return NextResponse.next();

  if (isBlockedAgent(req.headers.get("user-agent"))) {
    return new NextResponse(
      "Automated access to this website is not permitted. Content may not be copied, scraped or used to train AI. Contact info@jamhoriyatsaheliyan.com for permission.",
      {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
      },
    );
  }
  return NextResponse.next();
}

export const config = {
  // Everything except Next.js build assets.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
