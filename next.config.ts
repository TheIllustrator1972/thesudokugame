import type { NextConfig } from "next";

const associationHeaders = [
  { key: "Content-Type", value: "application/json" },
];

const nextConfig: NextConfig = {
  env: {
    GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: associationHeaders,
      },
      {
        source: "/apple-app-site-association",
        headers: associationHeaders,
      },
    ];
  },
};

export default nextConfig;
