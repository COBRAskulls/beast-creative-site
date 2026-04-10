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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
