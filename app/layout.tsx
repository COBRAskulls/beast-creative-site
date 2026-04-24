import type { Metadata } from "next";
import { barlowCondensed, inter } from "@/lib/fonts";
import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default:
      "Beast Creative Agency | AI-Powered Digital Marketing | National",
    template: "%s | Beast Creative Agency",
  },
  description:
    "Beast Creative Agency is a national AI-powered digital marketing agency. CPG marketing, SEO, paid media, and branding with proven results: 7.03% CTR, 36,581 campaign entries, 500%+ MRR growth.",
  metadataBase: new URL("https://beastcreativeagency.com"),
  openGraph: {
    siteName: "Beast Creative Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{overflowX:"hidden"}}
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="font-body bg-beast-black text-white antialiased overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[200] focus:bg-beast-pink focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:text-sm focus:tracking-wide">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
