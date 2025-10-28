import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during builds on Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignore type errors during builds
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
