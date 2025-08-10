import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: '/react-timestamper',
  images: {
    unoptimized: true
  },
  experimental: {
    useLightningcss: true,
  }
};

export default nextConfig;
