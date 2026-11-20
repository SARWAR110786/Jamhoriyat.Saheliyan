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
};

export default nextConfig;
