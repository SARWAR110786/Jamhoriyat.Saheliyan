import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve the prepared WebP files exactly as they are. Letting Next/Vercel
    // re-encode them (to AVIF) a second time, on top of WhatsApp's own
    // compression, is what made the photos look soft and blurred.
    // Sizes are controlled at prep time instead (scripts/prep-photos.py):
    // full images ≤ 2400px, thumbnails 800px for grids.
    unoptimized: true,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // No other site may show this site inside a frame (stops look-alike copies).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          // Opt out of AI training and text-and-data mining. Search indexing is unaffected.
          { key: "X-Robots-Tag", value: "noai, noimageai" },
          { key: "tdm-reservation", value: "1" },
        ],
      },
    ];
  },
};

export default nextConfig;
