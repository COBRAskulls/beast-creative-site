import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Williams Back-to-School Case Study | 22,043 Entries on $4K | Beast Creative",
  description:
    "How Beast Creative Agency drove 22,043 sweepstakes entries for Williams Foods on a $4,000 budget — 2.2x over goal with 3.89% CTR.",
};

export default function WilliamsBtsPage() {
  return (
    <>
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
              22,043 Entries.{" "}
              <span className="text-beast-pink">$4,000 Budget. 2.2x Goal.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              The &quot;Williamize Your Food&quot; back-to-school sweepstakes that set the playbook for every CPG campaign that followed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#111111] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <StatCounter value={22043} label="Total Entries" sublabel="vs 10K goal" />
            <StatCounter value={3.89} suffix="%" decimals={2} label="CTR" sublabel="vs 0.89% avg" />
            <StatCounter value={0.18} prefix="$" decimals={2} label="CPC" sublabel="vs $0.28 avg" />
            <StatCounter value={4000} prefix="$" label="Ad Budget" sublabel="total spend" />
            <StatCounter value={287896} label="Paid Reach" sublabel="total" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Brief</h2>
                <p className="text-gray-600 leading-relaxed">
                  Williams Foods needed to drive consumer engagement and first-party data collection during the back-to-school season. The goal was <strong className="text-beast-black">10,000 sweepstakes entries</strong> on a $4,000 ad budget — a high bar for a campaign of that size.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A back-to-school themed sweepstakes campaign with targeted paid social across Facebook and Instagram. Beast built the landing page, ad creative, and audience strategy — then executed with real-time optimization throughout the campaign window.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The entry mechanic was low-friction — enter once for multiple chances to win — which reduced drop-off and kept CPC low while driving volume.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Results</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We hit <strong className="text-beast-black">22,043 entries</strong> — 2.2x the stated goal — at <strong className="text-beast-black">$0.18 CPC</strong> vs the $0.28 industry average. CTR of 3.89% was 4.4x the industry benchmark. Total reach: 287,896 consumers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These results validated the sweepstakes model and justified the more ambitious March Madness and Sun-Bird campaigns that followed.
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Williams Foods (C.H. Guenther & Son)" },
                    { label: "Industry", value: "CPG / Food & Beverage" },
                    { label: "Year", value: "2021" },
                    { label: "Ad Budget", value: "$4,000" },
                    { label: "Goal", value: "10,000 entries" },
                    { label: "Result", value: "22,043 entries — 2.2x" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Let&apos;s Build Your Story →</h2>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">
              Get My Free Strategy Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
