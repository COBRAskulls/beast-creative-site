import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Williams Bowl NFL Case Study | Beast Creative Agency",
  description:
    "The $1,500 Williams Bowl campaign that proved the sweepstakes model — 6,020 entries, 872 new page likes, $0.16 CPC.",
};

const results = [
  { value: 6020, label: "Total Entries", sublabel: "NFL season" },
  { value: 1500, prefix: "$", label: "Ad Budget", sublabel: "proof-of-concept" },
  { value: 0.16, prefix: "$", decimals: 2, label: "CPC", sublabel: "vs $0.28 avg" },
  { value: 872, label: "New Page Likes", sublabel: "Facebook" },
];

export default function WilliamsBowlPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["CPG Marketing", "Paid Social", "Sweepstakes"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Williams Foods · 2021</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              The $1,500 Campaign That{" "}
              <span className="text-beast-pink">Proved the Model.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Williams Bowl was Beast&apos;s entry point with Williams Foods — a lean budget that proved the sweepstakes playbook before scaling to larger campaigns.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#111111] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  Williams Foods wanted to test whether a digital sweepstakes mechanic could drive measurable consumer engagement during the NFL season — on a tight $1,500 budget. No guarantees. No precedent. Just a hypothesis that needed proving.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This was Beast&apos;s first campaign with Williams Foods — the one that opened the door to everything that followed.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A football-season themed sweepstakes campaign tied to Williams Bowl — a Williams Foods branded NFL watching experience. Beast built the entry mechanic, ad creative, and targeting strategy, then executed with real-time optimization.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The campaign was designed to be lean: minimal production cost, maximum efficiency. Every dollar went to reach and entry volume.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Why It Mattered</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Williams Bowl was Beast&apos;s first campaign with Williams Foods — a proof-of-concept on a $1,500 budget. The results justified the more ambitious Back-to-School and March Madness campaigns that generated 22,043 and 13,660 entries respectively.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At $0.16 CPC against a $0.28 industry average, the campaign validated the sweepstakes model and established the Williams Foods relationship that became Beast&apos;s flagship CPG case study portfolio.
                </p>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Williams Foods" },
                    { label: "Industry", value: "CPG / Food & Beverage" },
                    { label: "Year", value: "2021" },
                    { label: "Ad Budget", value: "$1,500" },
                    { label: "Services", value: "Sweepstakes, Paid Social" },
                    { label: "Result", value: "6,020 entries" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-[#111111] rounded-2xl p-6 border border-beast-pink/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">vs Industry Benchmark</h3>
                  {[
                    { metric: "CPC", beast: "$0.16", industry: "$0.28", lift: "43% lower" },
                    { metric: "New Likes", beast: "872", industry: "organic growth", lift: "paid boost" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4">
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{row.metric}</p>
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-beast-pink text-xl">{row.beast}</span>
                        <span className="text-xs text-gray-600">vs {row.industry}</span>
                      </div>
                      <span className="text-xs bg-beast-pink/15 text-beast-pink px-2 py-0.5 rounded-full font-semibold">{row.lift}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["sun-bird", "williams-bts", "williams-allstars"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Let&apos;s Build Your Story →</h2>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">Get My Free Strategy Call →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
