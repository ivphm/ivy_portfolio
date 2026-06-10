import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/ivy_portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
