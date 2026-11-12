import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Photos are already optimised to WebP at build-prep time (see /public/photos).
    formats: ["image/avif", "image/webp"],
    // Source photos keep their native resolution (up to 3200px), so large
    // screens get a sharp image instead of an upscaled one.
    deviceSizes: [360, 414, 640, 828, 1080, 1280, 1600, 1920, 2048, 2560],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
};

export default nextConfig;
