import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Funding Options: From Bootstrapping to Venture Capital | Beast Creative Agency",
  description:
    "Nearly 90% of consumer packaged goods startups exhaust their initial capital within the first two years, yet the survivors who master funding diversification",
};

export default function CpgFundingOptionsBootstrappingVentureCapitalPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "CPG Funding Options: From Bootstrapping to Venture Capital",
            description: "Nearly 90% of consumer packaged goods startups exhaust their initial capital within the first two years, yet the survivors who master funding diversification",
            datePublished: "2026-01-12",
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
              <span className="text-xs text-gray-500">January 12, 2026 · 7 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Funding Options:{" "}
              <span className="text-beast-pink">From Bootstrapping to Venture Capital</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Nearly 90% of consumer packaged goods startups exhaust their initial capital within the first two years, yet the survivors who master funding diversification grow 3x faster than single-source funded competitors. The difference lies in understanding which funding option matches each growth stage.
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
                  src="/assets/blog/contentcraft-6944cc047b7c8-1-1024x585.png"
                  alt="CPG Funding Options: From Bootstrapping to Venture Capital"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944cc119a760-1.png"
                  alt="Understanding CPG Funding Fundamentals"
                  width={1344}
                  height={768}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Understanding CPG Funding Fundamentals</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Consumer packaged goods companies face unique funding challenges that separate them from typical tech startups or service businesses. You’re dealing with inventory costs, manufacturing requirements, retail relationships, and complex supply chains that demand substantial upfront capital.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s the thing: most CPG entrepreneurs approach funding backwards. They chase the biggest check instead of matching funding sources to their specific business stage and needs. This misalignment kills more promising brands than poor product-market fit.</p>

              <p className="text-gray-700 leading-relaxed mb-4">The most successful CPG companies build what we call a “funding ladder” – strategically moving from one funding source to the next as they hit specific milestones and growth requirements.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Bootstrapping: Building Your Foundation</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Bootstrapping remains the most common starting point for CPG brands, and for good reason. You maintain complete control, validate real market demand, and build sustainable unit economics before bringing in outside capital.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">When Bootstrapping Works Best</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Self-funding makes sense when you’re testing product concepts, building initial prototypes, or serving local markets. Many successful CPG brands started in founders’ kitchens or garages, perfecting recipes and building loyal customer bases through farmers markets and direct sales.</p>

              <p className="text-gray-700 leading-relaxed mb-4">The reality is bootstrapping forces discipline. You can’t afford vanity metrics or elaborate marketing campaigns – every dollar must generate measurable returns. This constraint often leads to more creative, cost-effective solutions that become competitive advantages later.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Bootstrapping Strategies That Work</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Pre-sales and crowdfunding:</strong> Test demand while generating initial working capital</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Revenue-based growth:</strong> Reinvest profits systematically rather than extracting cash</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Lean manufacturing:</strong> Start with co-packers instead of building facilities</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Direct-to-consumer focus:</strong> Build margins and customer relationships before retail</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Barter and partnerships:</strong> Exchange equity or services for needed resources</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">Most businesses miss this: successful bootstrapping isn’t about being cheap – it’s about being strategic with limited resources. Focus on high-impact activities that directly drive sales and customer acquisition.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Friends and Family Funding</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Friends and family rounds typically range from $10,000 to $100,000 and serve as a bridge between bootstrapping and formal investment. This funding works best when you’ve proven initial traction but need capital to scale production or enter new markets.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Structuring Friends and Family Deals</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Keep these arrangements professional despite personal relationships. Use simple agreements like convertible notes or SAFE (Simple Agreement for Future Equity) instruments that convert to equity in later funding rounds.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s what works: be transparent about risks, provide regular updates, and set clear expectations about timeline to liquidity. Treat family investors like professional investors – they deserve the same level of communication and respect.</p>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944cc1bc7e07-1.png"
                  alt="Angel Investors and Seed Funding"
                  width={1344}
                  height={768}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Angel Investors and Seed Funding</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Angel investors typically invest $25,000 to $100,000, while seed rounds can reach $500,000 to $2 million. These investors often bring industry expertise, connections, and mentorship beyond just capital.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Finding the Right Angels</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Look for angels with CPG experience who understand your specific challenges. Former retail executives, successful CPG founders, and industry veterans make ideal angel investors because they can open doors that pure financial investors cannot.</p>

              <p className="text-gray-700 leading-relaxed mb-4">This might surprise you: many of the best CPG angels don’t actively market themselves. They’re found through industry events, accelerator programs, and warm introductions from other entrepreneurs or advisors.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">What Angels Look For</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Angel investors evaluate CPG companies differently than tech startups. They focus on:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Unit economics:</strong> Clear path to profitability at the product level</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Market size:</strong> Addressable market large enough for significant returns</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Founder-market fit:</strong> Deep understanding of the category and customers</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Retail relationships:</strong> Existing or clear path to retail distribution</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Brand differentiation:</strong> Sustainable competitive advantages</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Venture Capital for CPG Companies</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Venture capital represents the most substantial funding option, with rounds ranging from $1 million to $50 million or more. However, VC funding comes with significant trade-offs in terms of control, growth expectations, and exit requirements.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">CPG-Focused VC Firms</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Not all VCs understand consumer packaged goods. Look for firms with dedicated CPG practices or successful CPG investments in their portfolios. These firms understand longer product development cycles, inventory requirements, and retail relationship complexities.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Top CPG-focused VCs include firms like Foundry Group, CircleUp, and Powerplant Ventures, though many traditional VCs have added CPG expertise as the sector has grown.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">VC Expectations and Requirements</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Venture capitalists typically expect 10x returns on their investments, which means your company needs the potential to reach $100 million+ in revenue. They also expect rapid growth – often 100%+ year-over-year revenue increases.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s the reality: VC funding accelerates everything. You’ll need to scale operations, hire quickly, and expand distribution aggressively. Make sure your systems, team, and market opportunity can handle this acceleration before taking VC money.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Alternative Funding Sources</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Beyond traditional equity funding, CPG companies have access to several alternative financing options that can be more suitable for certain situations.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Revenue-Based Financing</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Revenue-based financing provides capital in exchange for a percentage of future revenue until a predetermined multiple is repaid. This option works well for profitable companies that need working capital but don’t want to give up equity.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Companies like Clearco and Lighter Capital specialize in revenue-based financing for consumer brands, typically offering $10,000 to $10 million based on historical revenue and growth metrics.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Inventory and Purchase Order Financing</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Many CPG companies struggle with the cash flow gap between receiving purchase orders and getting paid by retailers. Inventory financing and purchase order financing help bridge this gap.</p>

              <p className="text-gray-700 leading-relaxed mb-4">These financing options are secured by inventory or specific purchase orders, making them less risky for lenders and more accessible for companies without perfect credit profiles.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Grants and Competitions</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Don’t overlook grants and business competitions, especially for companies with social impact components, sustainability focus, or innovative technologies. These non-dilutive funding sources can provide substantial capital without giving up equity.</p>

              <p className="text-gray-700 leading-relaxed mb-4">The USDA, state economic development agencies, and private foundations offer various grant programs for food and consumer product companies.</p>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944cc280bbde-1.png"
                  alt="Timing Your Funding Strategy"
                  width={1344}
                  height={768}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Timing Your Funding Strategy</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Successful CPG funding requires careful timing. Raising too early limits your negotiating power, while waiting too long can leave you cash-strapped and unable to capitalize on opportunities.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Key Funding Milestones</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Most CPG companies follow a predictable funding progression:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Pre-revenue:</strong> Bootstrapping and friends/family ($0-$50K)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Initial traction:</strong> Angel investment ($50K-$500K)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Proven demand:</strong> Seed funding ($500K-$2M)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Scale preparation:</strong> Series A ($2M-$10M)</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-beast-black">Growth acceleration:</strong> Series B and beyond ($10M+)</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">Here’s what works: raise funding 6-12 months before you actually need it. Fundraising takes longer than expected, and you want to negotiate from a position of strength rather than desperation.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Due Diligence and Investor Relations</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Professional investors will conduct thorough due diligence on your company, examining everything from financial projections to supply chain relationships. Preparation is essential for successful fundraising.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Essential Documentation</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Prepare a complete data room including:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Financial statements and projections</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer contracts and retail agreements</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Intellectual property documentation</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Manufacturing and supply chain details</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Regulatory compliance records</li>
                <li className="flex gap-3 text-gray-700 text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Marketing performance metrics</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">Most businesses miss this: investors care as much about your operational capabilities as your growth metrics. Be prepared to explain how you’ll scale manufacturing, maintain quality, and manage inventory as you grow.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common Funding Mistakes to Avoid</h2>

              <p className="text-gray-700 leading-relaxed mb-4">CPG entrepreneurs often make predictable funding mistakes that limit their options and growth potential.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Valuation and Dilution Errors</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Don’t optimize for the highest valuation at each round. Focus on finding investors who add value beyond capital and leave room for future funding rounds without excessive dilution.</p>

              <p className="text-gray-700 leading-relaxed mb-4">The reality is that a lower valuation with the right investor often leads to better long-term outcomes than a higher valuation with passive capital.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Investor Mismatch</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Taking money from investors who don’t understand your business or have misaligned expectations creates problems that persist throughout your relationship. Be selective about investor fit, not just check size.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Building Your Funding Strategy</h2>

              <p className="text-gray-700 leading-relaxed mb-4">Your funding strategy should align with your business model, growth timeline, and long-term objectives. Consider these factors when planning your approach:</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Capital Efficiency</h3>

              <p className="text-gray-700 leading-relaxed mb-4">CPG companies can often achieve profitability with less capital than tech startups, but they need more working capital for inventory and slower cash conversion cycles. Plan your funding strategy around these realities.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Exit Strategy Alignment</h3>

              <p className="text-gray-700 leading-relaxed mb-4">Different funding sources have different exit expectations. Understand whether your investors expect an IPO, acquisition, or dividend returns, and ensure these align with your own objectives.</p>

              <p className="text-gray-700 leading-relaxed mb-4">Your funding strategy isn’t just about raising capital – it’s about building a sustainable business that creates value for all stakeholders. The most successful CPG companies view funding as a strategic tool rather than just a financial necessity.</p>

              <p className="text-gray-700 leading-relaxed mb-4">At Beast Creative Agency, we’ve seen how the right funding strategy, combined with effective marketing and brand positioning, accelerates CPG growth beyond what either element could achieve alone. Our AI-enhanced campaigns help funded CPG brands maximize their marketing ROI while building the transparent, data-driven relationships that investors value. Ready to align your funding success with marketing excellence? Let’s discuss how our certified specialists can amplify your growth trajectory.</p>

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
