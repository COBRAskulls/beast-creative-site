import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Sun-Bird Bird Herd Case Study | 36,581 Entries, 7.03% CTR | Beast Creative",
  description:
    "How Beast Creative Agency helped Sun-Bird Seasonings collect 36,581 consumer emails on a $6,000 budget — achieving 7.03% CTR, nearly 8x the industry average.",
};

const results = [
  { value: 36581, label: "Total Entries", sub: "vs 10,000 goal — 3.6x" },
  { value: 7.03, suffix: "%", decimals: 2, label: "CTR", sub: "vs 0.89% industry avg" },
  { value: 0.12, prefix: "$", decimals: 2, label: "CPC", sub: "vs $0.28 industry avg" },
  { value: 6000, prefix: "$", label: "Ad Budget", sub: "total spend" },
  { value: 208431, label: "Paid Reach", sub: "national" },
  { value: 48347, label: "Paid Link Clicks", sub: "total" },
];

export default function SunBirdPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["CPG Marketing", "Paid Social", "Sweepstakes", "Consumer Data"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-green/15 text-beast-green border border-beast-green/20">
                  {tag}
                </span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Sun-Bird Seasonings · 2021</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              36,581 Consumer Emails.{" "}
              <span className="text-beast-green">One $6,000 Budget.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Bird Herd — the national Walmart rollout campaign that achieved 7.03% CTR, nearly 8x the industry average, at $0.12 CPC.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0D1F0F] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {results.map((r) => (
              <StatCounter key={r.label} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Brief</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sun-Bird Seasonings was announcing their national rollout into Walmart — a massive milestone for a regional seasoning brand. The goal: build consumer excitement, generate earned media, and collect first-party consumer data that proves consumer demand for their retail buyer meetings.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Entry goal: <strong className="text-beast-black">10,000 entries</strong>. Budget: $6,000 in ad spend.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beast architected the &quot;Bird Herd&quot; sweepstakes campaign — a nationally targeted paid social campaign designed to maximize reach and entry volume at the lowest possible cost. Every entry captured a consumer&apos;s name, email, and zip code — building a geographically mapped consumer database that could be used as retail demand evidence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The creative leveraged Sun-Bird&apos;s bold, colorful brand identity with a contest mechanic simple enough to generate mass entry volume. The &quot;Bird Herd&quot; name and visual identity created instant brand recall. The Walmart rollout announcement gave consumers a reason to care — being part of the launch moment.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Why It Worked</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beast&apos;s audience targeting found the sweet spot between reach and relevance, keeping CPC low while CTR soared to nearly 8x the industry benchmark. The low-friction entry mechanic minimized drop-off while the brand story — celebrating a national launch — gave consumers emotional investment in the campaign.
                </p>
                <blockquote className="border-l-4 border-beast-green pl-6 my-6">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;No competitor can walk into a pitch meeting with a 7.03% CTR and $0.12 CPC on a $6,000 budget. That&apos;s our proof of concept.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— John Speer, Co-Owner / COO</footer>
                </blockquote>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The First-Party Data Value</h2>
                <p className="text-gray-600 leading-relaxed">
                  36,581 email addresses + geographic distribution data gave Sun-Bird&apos;s retail team a compelling argument for shelf space expansion: <em>&quot;Here are 36,000 consumers who opted in to hear about our brand. Here&apos;s where they live.&quot;</em> That&apos;s the kind of proof a retail buyer can&apos;t argue with.
                </p>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Sun-Bird Seasonings" },
                    { label: "Industry", value: "CPG / Food & Beverage" },
                    { label: "Year", value: "2021" },
                    { label: "Ad Budget", value: "$6,000" },
                    { label: "Services", value: "Sweepstakes, Paid Social, Data Strategy" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-[#0D1F0F] rounded-2xl p-6 border border-beast-green/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">vs Industry Benchmark</h3>
                  {[
                    { metric: "CTR", beast: "7.03%", industry: "0.89%", lift: "7.9x" },
                    { metric: "CPC", beast: "$0.12", industry: "$0.28", lift: "57% lower" },
                    { metric: "Entries", beast: "36,581", industry: "10,000 goal", lift: "3.6x" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4">
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{row.metric}</p>
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-beast-green text-xl">{row.beast}</span>
                        <span className="text-xs text-gray-600">vs {row.industry}</span>
                      </div>
                      <span className="text-xs bg-beast-green/15 text-beast-green px-2 py-0.5 rounded-full font-semibold">{row.lift}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED + CTA */}
      <section className="bg-beast-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection>
              <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">Related Case Studies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { client: "Williams Foods", campaign: "Back-to-School Sweepstakes", stat: "22,043 entries", href: "/work/williams-bts" },
                  { client: "Sweet Sensi", campaign: "E-Commerce Growth", stat: "500%+ MRR", href: "/work/sweet-sensi" },
                ].map((cs) => (
                  <Link key={cs.href} href={cs.href} className="group bg-[#1A1A1A] rounded-xl p-5 border border-[#2E2E2E] hover:border-beast-green/30 transition-colors">
                    <p className="text-xs text-beast-green font-semibold mb-1">{cs.client}</p>
                    <p className="text-sm font-semibold text-white mb-2">{cs.campaign}</p>
                    <p className="text-lg font-bold text-white">{cs.stat}</p>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="border-t border-[#2E2E2E] pt-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Let&apos;s Build Your Story →</h2>
            <p className="text-gray-400 mb-8">Ready to put real numbers behind your brand?</p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">
              Get My Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
