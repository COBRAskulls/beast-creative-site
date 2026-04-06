import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Work | Case Studies | Beast Creative Agency",
  description:
    "Real campaigns. Real numbers. See how Beast Creative Agency delivers 8x industry benchmarks for CPG brands and San Antonio businesses.",
};

const caseStudies = [
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — National Walmart Rollout Campaign",
    heroStat: "36,581",
    heroStatLabel: "consumer emails on $6K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social", "Sweepstakes"],
    href: "/work/sun-bird",
    highlight: true,
    stats: [
      { label: "CTR", value: "7.03%", sub: "vs 0.89% avg" },
      { label: "CPC", value: "$0.12", sub: "vs $0.28 avg" },
      { label: "Reach", value: "208K", sub: "paid" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "Back-to-School \"Williamize Your Food\" Sweepstakes",
    heroStat: "22,043",
    heroStatLabel: "entries on $4K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social", "Sweepstakes"],
    href: "/work/williams-bts",
    highlight: false,
    stats: [
      { label: "CTR", value: "3.89%", sub: "vs 0.89% avg" },
      { label: "CPC", value: "$0.18", sub: "vs $0.28 avg" },
      { label: "Over Goal", value: "2.2x", sub: "target: 10K" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "All-Stars — March Madness Digital Trading Cards",
    heroStat: "13,660",
    heroStatLabel: "entries in 24 days",
    year: "2022",
    categories: ["CPG Marketing", "Campaign Design", "Paid Social"],
    href: "/work/williams-allstars",
    highlight: false,
    stats: [
      { label: "Reach", value: "200K", sub: "total" },
      { label: "Duration", value: "24", sub: "days" },
      { label: "Cards", value: "8", sub: "unique" },
    ],
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    year: "2023–2024",
    categories: ["SEO", "Social Media", "E-Commerce"],
    href: "/work/sweet-sensi",
    highlight: false,
    stats: [
      { label: "Strategy", value: "SEO", sub: "+ Social" },
      { label: "Email CTR", value: "9.5%", sub: "vs 0.82% avg" },
      { label: "Channels", value: "2x", sub: "compounding" },
    ],
  },
  {
    client: "Coinline",
    campaign: "Brand Naming & Identity",
    heroStat: "0",
    heroStatLabel: "explanation needed — name speaks itself",
    year: "2024–2025",
    categories: ["Branding", "Naming", "Identity Design"],
    href: "/work/coinline",
    highlight: false,
    stats: [
      { label: "Name", value: "1", sub: "perfect" },
      { label: "Research", value: "Extensive", sub: "gaming culture" },
      { label: "Ready", value: "Launch", sub: "ready" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "Williams Bowl — NFL Season Sweepstakes",
    heroStat: "6,020",
    heroStatLabel: "entries on $1.5K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social"],
    href: "/work/williams-bowl",
    highlight: false,
    stats: [
      { label: "Budget", value: "$1.5K", sub: "ad spend" },
      { label: "CPC", value: "$0.16", sub: "vs $0.28 avg" },
      { label: "New Likes", value: "872", sub: "Facebook" },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Our Work</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Work That Wins.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Real campaigns. Real clients. Real numbers — every one of these is verified, named, and repeatable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="bg-[#FAFAFA] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.href} delay={i * 0.08}>
                <Link href={cs.href} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="h-1.5 bg-beast-pink" />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-beast-pink">
                          {cs.client}
                        </p>
                        <span className="text-xs text-gray-400">{cs.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-beast-black mb-4 leading-tight">
                        {cs.campaign}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-display text-4xl font-extrabold text-beast-black tracking-normal">
                          {cs.heroStat}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{cs.heroStatLabel}</span>
                      </div>

                      {/* Mini stats */}
                      <div className="grid grid-cols-3 gap-2 my-4 py-4 border-y border-gray-100">
                        {cs.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="font-display text-base font-bold text-beast-black">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.sub}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cs.categories.map((cat) => (
                          <span key={cat} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <span className="btn-ghost-pink text-sm">View Case Study →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-beast-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-4">
              Ready to Be Our Next Case Study?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Every one of these campaigns started with a free 15-minute conversation. Let&apos;s have yours.
            </p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">
              Get My Free Strategy Call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
