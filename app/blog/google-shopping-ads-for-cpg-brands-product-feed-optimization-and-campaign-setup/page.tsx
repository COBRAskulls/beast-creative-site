import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Google Shopping Ads for CPG Brands: Product Feed Optimization and Campaign Setup | Beast Creative Agency",
  description:
    "Google Shopping drives 60–80% of retail search ad clicks. Learn how to optimize CPG product feeds, structure campaigns by tier, and achieve 150–300% ROAS improvements.",
};

const faqs = [
  {
    question: "Why are Google Shopping ads important for CPG brands?",
    answer:
      "Google Shopping drives 60–80% of retail search ad clicks, and properly optimized product feeds deliver 150–300% ROAS improvements over poorly structured competitors. For CPG brands with retail distribution, Shopping ads are often the highest-intent touchpoint in the digital funnel.",
  },
  {
    question: "What makes a good CPG product title for Google Shopping?",
    answer:
      "Lead with your brand name, then include key attributes in the first 70 characters: size, flavor, pack count, and primary benefit. Use language consumers actually search for. \"Kellogg's Frosted Flakes Original Family Size Cereal 24 oz Box\" outperforms \"Morning Crunch Breakfast Cereal SKU#12345\" every time.",
  },
  {
    question: "How should CPG brands structure Google Shopping campaigns?",
    answer:
      "Use a three-tier structure: Campaign Level 1 (Brand Protection) for core branded terms with elevated bids, Campaign Level 2 (Product Category) separating major lines like breakfast, snacks, and beverages, and Campaign Level 3 (Performance Tiers) for high-performers, new products, and clearance with differentiated bidding.",
  },
  {
    question: "What bidding strategy should CPG brands use for Google Shopping?",
    answer:
      "Target ROAS works well for established products with clear conversion metrics. Maximize Conversion Value suits seasonally variable products. Enhanced CPC is appropriate for new product launches that need more control while building conversion history. Match the strategy to your product's data maturity.",
  },
  {
    question: "How do I prevent my CPG Shopping campaign from spending on irrelevant queries?",
    answer:
      "Build a thorough negative keyword list. Essential exclusions for CPG include competitor brand names (unless competitive bidding is intentional), 'free,' 'sample,' 'coupon,' 'DIY,' 'homemade,' 'recipe,' and 'wholesale' or 'bulk' if you don't sell B2B. Review search term reports weekly, especially in the first 30 days.",
  },
];

export default function GoogleShoppingPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Google Shopping Ads for CPG Brands: Product Feed Optimization and Campaign Setup",
            description: "Learn how to optimize CPG product feeds and structure Google Shopping campaigns for maximum ROAS.",
            datePublished: "2025-09-12",
            author: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
            publisher: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                Paid Search
              </span>
              <span className="text-xs text-gray-500">September 12, 2025 · 9 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Google Shopping Ads for CPG Brands:{" "}
              <span className="text-beast-pink">Product Feed Optimization and Campaign Setup</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Google Shopping drives 60–80% of retail search ad clicks. Your product feed is your primary advertising strategy — here&apos;s how to build one that wins.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e5b565945-1-1024x585.png"
                  alt="Google Shopping ads for CPG brands"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding Google Shopping for CPG Brands</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike traditional search campaigns that rely on keyword bidding and custom ad copy, Google Shopping derives all advertising elements — titles, descriptions, pricing, images, availability — directly from your product feed. This makes feed architecture your primary advertising strategy, not campaign settings.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                CPG brands face unique challenges: managing expansive catalogs with numerous SKUs, seasonal variations, and intricate product structures. Properly optimized feeds yield 150–300% ROAS improvements over poorly structured competitors.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Product Feed Optimization: The Foundation of Success</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Product Title Optimization</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Effective CPG product titles should:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Lead with recognizable brand names",
                  "Incorporate key attributes: size, flavor, pack count, benefits",
                  "Use language consumers actually search for",
                  "Prioritize important information in the first 70 characters",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-section-offwhite rounded-xl p-5 mb-8 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Example</p>
                <p className="text-sm text-gray-500 mb-1"><span className="text-red-500 font-bold">✗ Weak:</span> &quot;Morning Crunch Breakfast Cereal – SKU#12345&quot;</p>
                <p className="text-sm text-gray-700"><span className="text-green-600 font-bold">✓ Strong:</span> &quot;Kellogg&apos;s Frosted Flakes Original Family Size Cereal 24 oz Box&quot;</p>
              </div>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e5bfcf0cd-1.png"
                  alt="CPG product feed optimization"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Category and Product Type Mapping</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Narrow category selections improve relevance. Rather than selecting &quot;Food &amp; Beverage,&quot; choose &quot;Food &amp; Beverage &gt; Beverages &gt; Soft Drinks &gt; Soda.&quot; Implement hierarchical custom product types reflecting actual customer shopping behavior.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Image Quality Standards</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Conversion-driving images require minimum 800×800 pixels (1200×1200 preferred), clean white backgrounds, product occupying 75–90% of image space, and usage context where appropriate.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Campaign Structure Strategy for CPG Brands</h2>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Campaign Level 1: Brand Protection", detail: "Dedicated campaigns for branded search terms with elevated bids to maintain visibility on your own brand." },
                  { label: "Campaign Level 2: Product Category", detail: "Separate campaigns by major product lines — breakfast, snacks, beverages — enabling category-specific budget allocation and seasonal adjustments." },
                  { label: "Campaign Level 3: Performance Tiers", detail: "Distinct campaigns for high-performers, new products, and clearance items with differentiated bidding approaches." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e5cb1e7db-1.png"
                  alt="Google Shopping campaign performance monitoring"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Performance Monitoring and Optimization</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Key CPG-specific metrics to track:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "ROAS by product category",
                  "Customer acquisition cost",
                  "Share of Voice among competitors",
                  "Click-through rate by product type",
                  "Feed quality issues and product disapprovals",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Establish automated alerts for feed complications — single processing errors can disable hundreds of products simultaneously.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common CPG Shopping Mistakes to Avoid</h2>
              <ul className="space-y-2 mb-8">
                {[
                  "Making bid adjustments more than weekly — allow 2–3 weeks for feed changes to show impact",
                  "Ignoring mobile performance — optimize image clarity and concise titles for smaller screens",
                  "Neglecting local inventory ads — \"Available nearby\" messaging increases CTR and conversion for distributed brands",
                  "Launching with your full catalog — start with core products, perfect them, then expand",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  We manage Google Shopping campaigns for CPG brands at every stage of national distribution — from initial feed builds to multi-SKU catalog optimization. We know how to win on the shelf and in search results.
                </p>
                <IconButton href="/cpg" icon="arrow">Learn About Our CPG Marketing</IconButton>
              </div>

            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-6 mt-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-section-offwhite rounded-xl p-6 border border-gray-100">
                  <p className="font-display font-bold text-beast-black mb-2">{faq.question}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* RELATED POSTS */}
      <section className="bg-section-offwhite py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-beast-black mb-8">More From the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/blog/cpg-sweepstakes-first-party-data-playbook" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG Marketing</span>
                  <span className="text-xs text-gray-400">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">The CPG Sweepstakes Playbook: How to Build a Consumer Database That Impresses Retail Buyers</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">We&apos;ve run sweepstakes campaigns that generated 36,581 entries on $6,000. Here&apos;s the exact framework — from mechanic desi</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">March 14, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/influencer-marketing-for-cpg-products-finding-and-working-with-content-creators" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG Marketing</span>
                  <span className="text-xs text-gray-400">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Influencer Marketing for CPG Products: Finding and Working With Content Creators</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Nearly 92% of consumers trust recommendations from people they don&apos;t personally know over traditional advertising.</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">February 16, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/social-media-marketing-for-cpg-brands-platform-strategies-that-drive-sales" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG Marketing</span>
                  <span className="text-xs text-gray-400">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Social Media Marketing for CPG Brands: Platform Strategies That Drive Sales</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">CPG brands face a unique challenge: selling products that consumers often buy on autopilot through platforms designed fo</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">February 14, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Win Google Shopping for Your CPG Brand?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast builds and optimizes Google Shopping campaigns that scale with your distribution — from regional to national.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
