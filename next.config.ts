import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    useLightningcss: true,
  }
};

export default nextConfig;
