import type { NextConfig } from "next";

const BASE_PATH = process.env.GITHUB_ACTIONS ? "/ivy_portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath is only needed on GitHub Pages (not local dev)
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
