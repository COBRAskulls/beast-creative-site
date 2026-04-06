import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Williams Bowl NFL Case Study | Beast Creative Agency",
  description:
    "The $1,500 Williams Bowl campaign that proved the sweepstakes model — 6,020 entries, 872 new page likes, $0.16 CPC.",
};

export default function WilliamsBowlPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["CPG Marketing", "Paid Social", "Sweepstakes"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-green/15 text-beast-green border border-beast-green/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Williams Foods · 2021</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              The $1,500 Campaign That{" "}
              <span className="text-beast-green">Proved the Model.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Williams Bowl was Beast&apos;s entry point with Williams Foods — a lean budget that proved the sweepstakes playbook before scaling to larger campaigns.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#0D1F0F] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCounter value={6020} label="Total Entries" sublabel="NFL season" />
            <StatCounter value={1500} prefix="$" label="Ad Budget" sublabel="lean proof-of-concept" />
            <StatCounter value={0.16} prefix="$" decimals={2} label="CPC" sublabel="vs $0.28 avg" />
            <StatCounter value={872} label="New Likes" sublabel="Facebook page" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 space-y-10">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Why This Campaign Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Williams Bowl was Beast&apos;s first campaign with Williams Foods — a proof-of-concept on a $1,500 budget. The results justified the more ambitious Back-to-School and March Madness campaigns that generated 22,043 and 13,660 entries respectively.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At $0.16 CPC against a $0.28 industry average, the campaign validated the sweepstakes model and established the Williams Foods relationship that became Beast&apos;s flagship CPG case study portfolio.
            </p>
          </AnimatedSection>
        </div>
      </section>

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
