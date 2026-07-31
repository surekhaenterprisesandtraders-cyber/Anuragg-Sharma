import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Explicitly allow quality 100 so gallery/hero/casting images are
    // served at full, uncompromised quality — Next.js only allows the
    // qualities listed here.
    qualities: [75, 90, 100],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
