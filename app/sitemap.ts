import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://beastcreativeagency.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/cpg`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/cpg-marketing`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/seo-aeo`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/paid-media`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/content-production`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/branding`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/web-design`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/sun-bird`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/williams-bts`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/williams-allstars`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/sweet-sensi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/coinline`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/williams-bowl`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.75 },
  ];
}
