import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqSchema } from "@/lib/schema";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Advertising Strategy: Choosing the Right Paid Channels for Your Budget | Beast Creative Agency",
  description:
    "Stop burning budget on the wrong channels. Learn how CPG brands should allocate paid media across Google, Meta, Amazon, and emerging platforms — with a proven 70-20-10 framework.",
};

const faqs = [
  {
    question: "What paid advertising channels are most important for CPG brands?",
    answer:
      "Google Ads (Search, Shopping, Display, YouTube) should anchor most CPG paid strategies at 40–50% of budget. Facebook and Instagram are essential for awareness and conversion. Amazon Advertising is critical for brands selling on the platform. Retail media networks (Walmart Connect, Target Roundel, Instacart) are increasingly valuable as the highest-intent advertising environment available.",
  },
  {
    question: "How should CPG brands split their paid media budget?",
    answer:
      "The 70-20-10 framework works well for established brands: 70% to proven performance channels, 20% to growth and expansion within those channels, 10% to innovation and testing of new platforms or formats. Emerging brands may benefit from a 40-40-20 split to find their highest-performing channel faster.",
  },
  {
    question: "Should CPG brands advertise on TikTok?",
    answer:
      "TikTok is worth testing for CPG brands targeting 18–34 demographics, especially in food, beauty, and lifestyle categories. Start with 5–10% of budget. TikTok's algorithm rewards organic-styled content — Spark Ads promoting existing organic posts often outperform traditional ad formats. If your brand can produce authentic short-form content, the platform can deliver strong results.",
  },
  {
    question: "What is the biggest CPG paid media budget mistake?",
    answer:
      "Spreading budget too thin across too many channels. Weak presence across five platforms consistently underperforms strong presence across two or three. Identify the platforms where your specific audience is most active and most likely to convert, dominate those, then expand only after establishing a baseline.",
  },
  {
    question: "How do CPG brands measure paid media success beyond ROAS?",
    answer:
      "ROAS alone is incomplete. Complement it with: brand lift studies measuring awareness and consideration improvements, market share growth tracking competitive positioning, customer retention rates monitoring repeat purchase behavior, and cross-sell effectiveness measuring whether new product trial campaigns expand basket size.",
  },
];

export default function CpgAdvertisingStrategyPost() {
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
            headline: "CPG Advertising Strategy: Choosing the Right Paid Channels for Your Budget",
            description: "Learn how CPG brands should allocate paid media across Google, Meta, Amazon, and emerging platforms.",
            datePublished: "2025-06-09",
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
                Paid Media Strategy
              </span>
              <span className="text-xs text-gray-500">June 9, 2025 · 8 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Advertising Strategy:{" "}
              <span className="text-beast-pink">Choosing the Right Paid Channels for Your Budget</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              CPG brands burn through 73% of their advertising budget on channels that deliver minimal returns. The problem isn&apos;t the creative — it&apos;s the allocation. Here&apos;s how to fix it.
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
                  src="/assets/blog/contentcraft-6944e43fb84eb-1-1024x585.png"
                  alt="CPG paid advertising channel strategy"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding CPG Advertising Fundamentals</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPG advertising differs fundamentally from other sectors. Rather than selling one-time services or high-value items, CPG brands focus on building awareness, driving trial, and fostering repeat purchases for regularly consumed products. The key characteristics that shape channel strategy:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Short consideration periods with quick in-store or online decisions",
                  "Low individual transaction values requiring focus on lifetime customer value",
                  "Intense competitive pressure across multiple brands in the same category",
                  "Significant seasonal demand fluctuations tied to holidays, weather, and trends",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The 70-20-10 Budget Framework for CPG Brands</h2>
              <div className="bg-section-offwhite rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="space-y-4">
                  {[
                    { pct: "70%", label: "Proven Performance Channels", detail: "Majority budget to consistently performing channels — primarily search advertising and active social platforms with documented ROAS history." },
                    { pct: "20%", label: "Growth and Expansion", detail: "Testing new audience segments within established channels, or expanding to comparable platforms based on initial performance data." },
                    { pct: "10%", label: "Innovation and Testing", detail: "Emerging channels, new creative formats, or experimental campaigns — TikTok ads, podcast sponsorships, new retail media platforms." },
                  ].map((row) => (
                    <div key={row.pct} className="flex gap-4">
                      <p className="font-display font-extrabold text-beast-pink text-2xl w-12 shrink-0">{row.pct}</p>
                      <div>
                        <p className="font-display font-bold text-beast-black text-sm mb-1">{row.label}</p>
                        <p className="text-gray-600 text-sm">{row.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Essential Paid Channels for CPG Brands</h2>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e4491d0c6-1.png"
                  alt="Google Ads strategy for CPG brands"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Google Ads: The Foundation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Allocate 40–50% of total paid budget to Google Ads, distributed across:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Search (60%): high-intent keywords including product categories, brand names, competitor terms",
                  "Shopping (25%): visual product ads showing pricing, ratings, availability — higher CTR on product queries",
                  "Display/Video (15%): brand awareness and retargeting; YouTube effective for demonstrating product benefits",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Facebook and Instagram</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Meta platforms excel at reaching CPG audiences through detailed targeting and visual storytelling. Instagram Shopping posts and Stories ads often outperform traditional Facebook feed ads for food, beauty, and lifestyle CPG categories. Allocate 25–35% here.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Amazon Advertising</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Essential for brands selling on Amazon. Begin with Sponsored Products targeting most profitable items, then expand to Sponsored Brands. Allocate 15–25% of total advertising budget for on-platform sellers.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Emerging Channels Worth Testing</h2>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "TikTok", detail: "Valuable for brands targeting 18–34 demographics. Algorithm rewards authentic content — Spark Ads on organic posts often outperform traditional formats." },
                  { label: "Pinterest", detail: "Discovery and planning mindset — ideal for food, beauty, home goods, and lifestyle CPG. Strong seasonality aligns with high-intent planning periods." },
                  { label: "Retail Media Networks", detail: "Walmart Connect, Target Roundel, Instacart — highest purchase intent available. Test with 5–10% before scaling." },
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
                  src="/assets/blog/contentcraft-6944e454d4a45-1.png"
                  alt="CPG channel budget optimization"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Budget Optimization Strategies</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Seasonal Budget Planning</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Peak seasons: increase budget 30–50% during high-demand periods",
                  "Competitive periods: boost spending during major sale events (Black Friday, back-to-school)",
                  "Low seasons: maintain presence while shifting toward testing and brand-building",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">The Biggest Mistakes to Avoid</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Over-investing in last-click attribution — it undervalues awareness channels that drive long-term growth",
                  "Ignoring platform seasonality — Pinterest, TikTok, and Google all have distinct usage patterns",
                  "Spreading budget too thin — dominate 2–3 channels rather than achieving weak presence across 6",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  We specialize in CPG advertising strategy — helping food, beverage, and consumer brands choose the right channels, build the right creative, and scale what works. We&apos;ve done it for national brands and regional challengers alike.
                </p>
                <IconButton href="/cpg" icon="arrow">Learn About Our CPG Marketing</IconButton>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="text-beast-pink text-xs font-bold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-10 text-center">Common Questions</h2>
            <FaqAccordion faqs={faqs} />
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
              Ready to Stop Wasting Budget and Start Scaling?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast helps CPG brands build channel strategies that match where their customers actually are — and their budget to what actually converts.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
