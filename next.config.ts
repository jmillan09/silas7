import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (served by Nginx on the VPS). Each route becomes
  // /<route>/index.html so Nginx can serve it without rewrites.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
