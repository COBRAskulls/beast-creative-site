import { Metadata } from "next";

const BASE_URL = "https://beastcreativeagency.com";

export function generateMetadata(options: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}): Metadata {
  const {
    title,
    description,
    path,
    ogTitle,
    ogDescription,
    ogImage = "/og/home.jpg",
  } = options;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: `${BASE_URL}${path}`,
      siteName: "Beast Creative Agency",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [ogImage],
    },
  };
}
