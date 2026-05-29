import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",


  images: {
    unoptimized: true,
  },

  trailingSlash: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
