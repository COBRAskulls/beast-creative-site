import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Beast Creative Agency San Antonio",
  description:
    "Full-service digital marketing from San Antonio's Beast Creative Agency: CPG marketing, SEO + AEO, paid social, AI content production, branding, and web design.",
};

const services = [
  {
    name: "CPG Marketing",
    icon: "🎯",
    badge: "Flagship",
    pitch: "Sweepstakes campaigns, first-party data collection, and retail-ready proof for food and beverage brands going national.",
    href: "/services/cpg-marketing",
    stats: "36,581 entries on $6K",
  },
  {
    name: "SEO + AEO",
    icon: "🔍",
    pitch: "Traditional search engine optimization plus Answer Engine Optimization — so your brand appears in Google AND AI search tools like ChatGPT, Gemini, and Perplexity.",
    href: "/services/seo-aeo",
    stats: "11.6x email CTR lift",
  },
  {
    name: "Paid Media",
    icon: "📈",
    pitch: "AI-optimized Facebook, Instagram, TikTok, and Google campaigns with real-time creative testing and daily optimization.",
    href: "/services/paid-media",
    stats: "$0.12 CPC achieved",
  },
  {
    name: "AI Content Production",
    icon: "⚡",
    pitch: "Recipe videos, product demos, and social content at scale — produced with AI at 90%+ lower cost than traditional production.",
    href: "/services/content-production",
    stats: "900+ assets processed",
  },
  {
    name: "Branding & Identity",
    icon: "✦",
    pitch: "Brand naming, visual systems, logo design, and identities that create instant recognition and don't require explanation.",
    href: "/services/branding",
    stats: "Coinline — zero explanation needed",
  },
  {
    name: "Web Design & CRO",
    icon: "💻",
    pitch: "Conversion-focused builds, mobile-first, performance-optimized to turn traffic into qualified leads and revenue.",
    href: "/services/web-design",
    stats: "Lighthouse 90+ scores",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mx-auto mb-6">
              Marketing That&apos;s Built to Perform.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl mx-auto">
              Six services. One goal — results you can measure, report, and take to the boardroom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.08}>
                <Link href={svc.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-2xl">{svc.icon}</span>
                      {svc.badge && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-bold text-beast-black mb-3">{svc.name}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{svc.pitch}</p>
                    <div className="border-t border-gray-100 pt-4 mt-2 flex items-center justify-between">
                      <span className="text-xs font-mono text-beast-pink font-semibold">{svc.stats}</span>
                      <span className="btn-ghost-pink text-sm">Learn More →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beast-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white tracking-tight mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free 15-minute strategy call. We&apos;ll tell you exactly which service would move the needle most for your brand — no pitch, no commitment.
            </p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">Get My Free Strategy Call →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
