import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath is only needed on GitHub Pages (not local dev)
  basePath: process.env.GITHUB_ACTIONS ? "/ivy_portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
