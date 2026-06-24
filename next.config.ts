import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Serve confidential static proposals at a clean, slash-free URL.
  // Next does not resolve a directory's index.html on its own.
  async rewrites() {
    return [
      {
        source: "/proposals/:slug",
        destination: "/proposals/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
