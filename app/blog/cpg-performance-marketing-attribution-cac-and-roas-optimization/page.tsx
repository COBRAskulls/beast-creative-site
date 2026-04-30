import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Performance Marketing: Attribution, CAC, and ROAS Optimization | Beast Creative Agency",
  description:
    "Master CPG performance marketing with attribution models that bridge digital and in-store, calculate true customer acquisition cost, and optimize blended ROAS.",
};

const faqs = [
  {
    question: "What attribution model works best for CPG brands?",
    answer:
      "Multi-touch attribution with extended windows works best for CPG — typically 90–180 days for awareness campaigns and 7–30 days for promotional campaigns. Single-touch last-click attribution dramatically undervalues upper-funnel activity and leads to budget cuts in exactly the channels that build long-term growth.",
  },
  {
    question: "How do I calculate true CAC for a CPG brand?",
    answer:
      "True CPG CAC includes all paid media spend, content creation costs, retail partnership investments, and measurement technology — divided by new customers acquired. Critically, it should account for the repeat purchase behavior of the cohort, since a customer who buys 6 times per year has a very different LTV than one who buys once.",
  },
  {
    question: "What ROAS should CPG brands target?",
    answer:
      "Target ROAS varies significantly by product margin, category, and stage of growth. A 3x blended ROAS is a common benchmark for established CPG brands, but early-stage brands building awareness may run efficiently at lower ROAS while building the customer base. Always calculate against contribution margin, not revenue.",
  },
  {
    question: "How do I measure offline sales driven by digital marketing?",
    answer:
      "The most reliable methods are: geo-fencing retail locations to track store visits after digital exposure, panel-based purchase data correlating digital ad exposure to in-store purchases, matched market testing where you run campaigns in some markets and hold others out as controls, and post-purchase surveys asking customers how they discovered the brand.",
  },
  {
    question: "What is incrementality testing and should CPG brands do it?",
    answer:
      "Incrementality testing uses holdout groups — audiences that don't see your ads — to measure the true lift your campaigns generate versus organic sales. It's the most accurate way to understand if your ads are driving new purchases or just claiming credit for purchases that would have happened anyway. Yes, CPG brands should do it at least quarterly.",
  },
];

export default function CpgPerformanceMarketingPost() {
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
            headline: "CPG Performance Marketing: Attribution, CAC, and ROAS Optimization",
            description:
              "Master CPG performance marketing with attribution models that bridge digital and in-store, calculate true customer acquisition cost, and optimize blended ROAS.",
            datePublished: "2025-11-10",
            author: {
              "@type": "Organization",
              name: "Beast Creative Agency",
              url: "https://beastcreativeagency.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Beast Creative Agency",
              url: "https://beastcreativeagency.com",
            },
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
                Performance Marketing
              </span>
              <span className="text-xs text-gray-500">November 10, 2025 · 9 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Performance Marketing:{" "}
              <span className="text-beast-pink">Attribution, CAC, and ROAS Optimization</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              The CPG attribution gap is real — digital ads drive in-store purchases that never show up in your dashboard. Here&apos;s how to measure and optimize across that gap.
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
                  src="/assets/blog/contentcraft-6944e69d18025-1-1024x585.png"
                  alt="CPG performance marketing attribution dashboard"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The CPG Attribution Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPG brands allocate significantly more resources toward performance marketing than other sectors, yet face a fundamental measurement problem: digital marketing efforts don&apos;t directly correlate with in-store transactions. Unlike DTC models with clear conversion tracking, CPG spans digital research and physical retail purchases.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">The key complications:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Online research contrasting with offline retail purchases",
                  "Extended timeframes between brand awareness and actual buying",
                  "Multiple household members participating in purchase decisions",
                  "Seasonal variations affecting attribution windows",
                  "Retailer promotions masking brand marketing impact",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Attribution Models That Actually Work for CPG</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Different campaign types require different attribution windows:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { label: "Brand Awareness Attribution", detail: "90–180 day windows for upper-funnel initiatives, tracking branded search increases and demographic website visits." },
                  { label: "Product Education Attribution", detail: "30–90 day windows for educational content, monitoring recipe downloads, video completions, and product page behavior." },
                  { label: "Purchase Intent Attribution", detail: "7–30 day windows for promotional campaigns, observing store locator usage and coupon engagement." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Probabilistic Attribution for Offline Purchases</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Bridge the digital-to-physical gap through:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Geo-fencing retail locations for visit tracking post-digital exposure",
                  "Panel-based purchase data correlating digital interactions with buying behavior",
                  "Direct consumer surveys about discovery processes",
                  "Matched market testing isolating campaign effects geographically",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e6a6bd151-1.png"
                  alt="CPG customer acquisition cost calculation"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Calculating True CAC for CPG Brands</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                True CPG CAC requires accounting for repeat purchases across customer households — not just single transactions. The formula must encompass paid media, content creation, retail partnership investments, and measurement technology costs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Segment CAC analysis by cohort:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Acquisition channel: social, search, display, influencer, PR",
                  "Customer demographics: age, income, household composition, location",
                  "Seasonal timing patterns",
                  "Product category or initial SKU purchased",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">ROAS Optimization Strategies</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Blended vs. Channel-Specific ROAS</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Successful brands monitor both: blended ROAS guides overall budget allocation while channel-specific ROAS identifies individual channel efficiency. Don&apos;t cut a high-ROAS channel if it&apos;s only capturing demand that other channels created.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Advanced Optimization Techniques</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Incrementality Testing", detail: "Holdout experiments reveal true campaign impact beyond cannibalization of organic sales." },
                  { label: "Media Mix Modeling", detail: "Statistical analysis optimizes budget distribution across channels over time." },
                  { label: "Creative Performance Analysis", detail: "ROAS improvements often stem from creative refinement rather than targeting adjustments alone." },
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
                  src="/assets/blog/contentcraft-6944e6aea017d-1.png"
                  alt="CPG ROAS optimization strategies"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common CPG Attribution Mistakes to Avoid</h2>
              <ul className="space-y-2 mb-8">
                {[
                  "Last-click attribution applied to brand awareness campaigns",
                  "Overlooking view-through and assisted conversions",
                  "Attribution windows misaligned with CPG purchase cycles",
                  "Failing to account for organic sales cannibalization",
                  "Over-crediting easily trackable channels like search",
                  "Excluding retail partnership costs from CAC calculations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  We&apos;ve run performance marketing for CPG brands at every stage — from $4K sweepstakes campaigns to national Walmart rollouts. Our attribution frameworks account for the full CPG customer journey, not just what&apos;s easy to track.
                </p>
                <IconButton href="/work" icon="arrow">See Our CPG Results</IconButton>
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
              Ready to Measure What Actually Drives CPG Growth?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast builds performance marketing systems that account for the full CPG customer journey — online and off.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
