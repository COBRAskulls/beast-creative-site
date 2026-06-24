import { MetadataRoute } from "next";

// AI search crawlers we explicitly welcome onto public content.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
];

// Paths kept out of every crawler. /proposals holds confidential, unlisted
// client proposals that should never be indexed or surfaced.
const DISALLOW = ["/api/", "/admin/", "/proposals/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: "https://beastcreativeagency.com/sitemap.xml",
  };
}
