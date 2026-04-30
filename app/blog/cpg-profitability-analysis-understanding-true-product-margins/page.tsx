import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Profitability Analysis: Understanding True Product Margins | Beast Creative Agency",
  description:
    "Most CPG brands think they know their profit margins, but hidden costs are quietly eroding their bottom line by an average of 15-20%. True profitability",
};

export default function CpgProfitabilityAnalysisProductMarginsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "CPG Profitability Analysis: Understanding True Product Margins",
            description: "Most CPG brands think they know their profit margins, but hidden costs are quietly eroding their bottom line by an average of 15-20%. True profitability",
            datePublished: "2026-01-13",
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
                CPG
              </span>
              <span className="text-xs text-gray-500">January 13, 2026 · 6 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Profitability Analysis:{" "}
              <span className="text-beast-pink">Understanding True Product Margins</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Most CPG brands think they know their profit margins, but hidden costs are quietly eroding their bottom line by an average of 15-20%. True profitability analysis goes far beyond basic cost-of-goods calculations to reveal the real financial health of your product lines.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Hidden Complexity of CPG Profit Margins</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Consumer packaged goods profitability isn’t just about manufacturing costs versus selling price. The reality is much more nuanced. Every successful CPG brand needs to account for dozens of cost factors that can make the difference between a thriving product line and one that’s secretly bleeding money.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s what makes CPG profitability analysis particularly challenging: your costs are constantly shifting. Raw material prices fluctuate, shipping rates change, promotional spending varies by season, and retailer fees evolve. Without a complete understanding of these moving parts, you’re flying blind.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Why Traditional Margin Calculations Fall Short</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Most businesses calculate gross margin using this simple formula: (Revenue – Cost of Goods Sold) / Revenue. But this approach misses critical elements that can dramatically impact your true profitability:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Trade promotion costs and retailer allowances</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Distribution and logistics expenses</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Marketing and advertising spend</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Slotting fees and category management costs</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Returns, damages, and unsalable inventory</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Seasonal demand fluctuations</li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Building a Complete CPG Profitability Framework</h2>

              <p className="text-gray-700 leading-relaxed mb-4">To understand your true product margins, you need a systematic approach that captures all cost elements. Here’s how to build a framework that gives you accurate, actionable insights.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Step 1: Map Your Complete Cost Structure</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Start by identifying every cost that touches your product from conception to consumer purchase. This might surprise you, but most CPG brands underestimate their true costs by 10-30%.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Direct Product Costs:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Raw materials and ingredients</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Packaging materials</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Manufacturing labor</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Quality control and testing</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Co-packer fees (if applicable)</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">Distribution and Logistics:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Warehousing and storage</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Transportation to distributors/retailers</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Third-party logistics fees</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Inventory carrying costs</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Damage and shrinkage</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">Trade and Marketing Expenses:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Trade promotions and discounts</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Slotting fees and promotional allowances</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Advertising and marketing campaigns</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> In-store marketing materials</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Broker commissions</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Step 2: Allocate Costs Accurately by Product Line</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s where many CPG brands get tripped up. They know their total costs, but they don’t allocate them properly across different products, sizes, or channels. A 12-pack of your product might seem more profitable than individual units, but when you factor in the specialized packaging, different distribution requirements, and unique promotional costs, the numbers might tell a different story.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Use activity-based costing to assign expenses based on what actually drives costs, not just simple volume splits. This approach reveals which products, package sizes, and sales channels are your real profit drivers.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Advanced Margin Analysis Techniques</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Contribution Margin by Channel</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Different sales channels have dramatically different cost structures. Selling to Walmart involves different trade terms, logistics requirements, and support costs compared to selling through specialty food distributors or direct-to-consumer channels.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Calculate contribution margins for each major channel:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Mass retail (grocery chains, big box stores)</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Specialty retail</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Food service</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> E-commerce platforms</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Direct-to-consumer</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">This analysis often reveals surprising insights. You might discover that your smallest volume channel is actually your most profitable, or that a major retail relationship is destroying your margins despite high sales volume.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Seasonal Profitability Patterns</h3>

              <p className="text-gray-700 leading-relaxed mb-4">CPG profitability fluctuates throughout the year based on demand patterns, promotional calendars, and supply chain dynamics. Map your margins by quarter or month to identify:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Peak profitability periods</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Seasonal cost spikes (raw materials, transportation)</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Heavy promotional periods that compress margins</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Inventory buildup costs before peak seasons</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Product Portfolio Optimization</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Once you have accurate margin data, you can make strategic decisions about your product portfolio. This doesn’t always mean cutting low-margin products – sometimes they serve as traffic drivers or complement high-margin items.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Consider these portfolio strategies:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Margin Enhancement:</strong> Reformulate or repackage low-margin products</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Strategic Pruning:</strong> Discontinue products that drain resources</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Channel Optimization:</strong> Shift products to more profitable sales channels</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Innovation Focus:</strong> Develop new products in high-margin categories</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Tools and Systems for Ongoing Analysis</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Data Integration Requirements</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Effective CPG profitability analysis requires pulling data from multiple sources:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> ERP systems for manufacturing and operational costs</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Trade promotion management platforms</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Retailer data feeds (EDI, syndicated data)</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Marketing spend tracking systems</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Logistics and distribution cost data</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">The key is creating automated data flows so you can track margins in real-time, not just during quarterly reviews.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Key Performance Indicators to Monitor</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Track these metrics consistently across your product portfolio:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Gross Margin:</strong> Basic profitability after direct costs</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Trade-Adjusted Margin:</strong> Gross margin minus trade promotions</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Contribution Margin:</strong> After all variable costs</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Net Margin:</strong> After allocated fixed costs</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Margin Velocity:</strong> Profit dollars per day of inventory</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common Profitability Pitfalls to Avoid</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">The “Revenue Growth at Any Cost” Trap</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Many CPG brands focus so heavily on top-line growth that they sacrifice profitability. This often happens when brands accept unprofitable promotional terms to gain distribution or volume. Always calculate the true cost of growth initiatives.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Ignoring Opportunity Costs</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Manufacturing capacity, working capital, and management attention are limited resources. A product line that breaks even financially might still be unprofitable if those resources could generate better returns elsewhere.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Static Cost Assumptions</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Your cost structure changes constantly. Set up quarterly reviews to update your profitability models with current costs, especially for volatile inputs like commodities, transportation, and promotional spending.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Turning Analysis into Action</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Pricing Strategy Optimization</h3>

              <p className="text-gray-700 leading-relaxed mb-4">With accurate margin data, you can make informed pricing decisions. This might mean raising prices on high-demand products, offering strategic discounts to move slow-turning inventory, or restructuring trade terms with retailers.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Cost Reduction Initiatives</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Focus cost reduction efforts where they’ll have the biggest impact. If packaging represents 15% of your product cost but promotional allowances are 25%, which deserves more attention?</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Resource Allocation Decisions</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Direct your marketing spend, innovation resources, and sales efforts toward your most profitable products and channels. This doesn’t mean abandoning everything else, but it ensures you’re maximizing returns on your investments.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Conclusion</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Understanding true CPG profitability requires looking beyond simple cost accounting to capture the complete picture of what drives margins in your business. The brands that invest in sophisticated profitability analysis gain a significant competitive advantage – they know which products, channels, and strategies actually generate profits.</p>

              <p className="text-gray-700 leading-relaxed mb-4">The complexity of modern CPG operations means this analysis requires both analytical rigor and strategic thinking. You need systems that can handle large volumes of data from multiple sources, but you also need the business insight to interpret that data and act on it effectively.</p>

              <p className="text-gray-700 leading-relaxed mb-4">At Beast Creative Agency, we help CPG brands build marketing strategies that enhance profitability, not just drive volume. Our AI-enhanced campaigns and radical transparency approach ensure your marketing investments support your most profitable products and channels. Ready to turn your profitability insights into growth? Let’s talk about how our certified specialists can help optimize your marketing ROI.</p>

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
              <a href="/blog/cpg-regulatory-changes-staying-compliant-in-evolving-markets" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG</span>
                  <span className="text-xs text-gray-400">7 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Regulatory Changes: Staying Compliant in Evolving Markets</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Federal regulatory shifts in the CPG industry have accelerated by 400% over the past three years, leaving many brands sc</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">January 17, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-counterfeit-products-protecting-your-brand-from-fraud" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG</span>
                  <span className="text-xs text-gray-400">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Counterfeit Products: Protecting Your Brand from Fraud</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Global counterfeit trade reached $509 billion in 2019, with consumer packaged goods representing the largest target cate</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">January 16, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-supply-chain-disruptions-building-resilience-and-flexibility" className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">CPG</span>
                  <span className="text-xs text-gray-400">9 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Supply Chain Disruptions: Building Resilience and Flexibility</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Recent data reveals that 73% of CPG companies experienced at least one major supply chain disruption in the past two yea</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">January 16, 2026</span>
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
              Ready to Grow Your CPG Brand?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast Creative Agency helps CPG brands build competitive advantages through strategic marketing, content, and brand development. Let&apos;s talk about what&apos;s possible for your brand.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
