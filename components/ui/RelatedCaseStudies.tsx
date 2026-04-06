import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ALL_STUDIES = {
  "sun-bird": {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — Walmart Rollout",
    stat: "36,581",
    statLabel: "consumer emails",
    category: "CPG Marketing",
    href: "/work/sun-bird",
    accent: "from-[#1a1a2e] to-[#111122]",
  },
  "williams-bts": {
    client: "Williams Foods",
    campaign: "Back-to-School Sweepstakes",
    stat: "22,043",
    statLabel: "entries on $4K",
    category: "CPG Marketing",
    href: "/work/williams-bts",
    accent: "from-[#1a1a1a] to-[#1a1208]",
  },
  "williams-allstars": {
    client: "Williams Foods",
    campaign: "All-Stars — March Madness",
    stat: "13,660",
    statLabel: "entries in 24 days",
    category: "Campaign Design",
    href: "/work/williams-allstars",
    accent: "from-[#1a1a1a] to-[#0f1a1a]",
  },
  "williams-bowl": {
    client: "Williams Foods",
    campaign: "Williams Bowl — NFL Sweepstakes",
    stat: "6,020",
    statLabel: "entries on $1.5K",
    category: "CPG Marketing",
    href: "/work/williams-bowl",
    accent: "from-[#1a1214] to-[#0f0a0a]",
  },
  "sweet-sensi": {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    stat: "500%+",
    statLabel: "MRR growth",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
    accent: "from-[#1a1a2a] to-[#120a1a]",
  },
  "coinline": {
    client: "Coinline",
    campaign: "Brand Naming & Identity",
    stat: "0",
    statLabel: "explanation needed",
    category: "Branding",
    href: "/work/coinline",
    accent: "from-[#1a1a1a] to-[#0a100a]",
  },
};

type StudyKey = keyof typeof ALL_STUDIES;

export default function RelatedCaseStudies({ related }: { related: StudyKey[] }) {
  const studies = related.slice(0, 3).map((key) => ALL_STUDIES[key]);

  return (
    <section className="bg-[#111111] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <AnimatedSection className="mb-8">
          <p className="section-eyebrow text-beast-pink mb-2">More Work</p>
          <h2 className="font-display text-2xl font-bold text-white">Related Case Studies</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {studies.map((cs, i) => (
            <AnimatedSection key={cs.href} delay={i * 0.08}>
              <Link href={cs.href} className="group block">
                <article className="bg-beast-black rounded-xl overflow-hidden border border-white/8 hover:border-beast-pink/40 hover:shadow-[0_0_30px_rgba(255,17,152,0.1)] transition-all duration-300 hover:-translate-y-0.5">
                  {/* Image placeholder area */}
                  <div className={`relative h-28 bg-gradient-to-br ${cs.accent} overflow-hidden flex items-center justify-center`}>
                    <span className="font-display text-4xl font-extrabold text-beast-yellow tracking-wide opacity-15 select-none">
                      {cs.stat}
                    </span>
                    <span className="absolute top-3 right-3 text-xs font-semibold uppercase tracking-widest text-gray-500 bg-black/50 px-2 py-0.5 rounded-full">
                      {cs.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-beast-pink mb-1">{cs.client}</p>
                    <h3 className="font-display text-sm font-bold text-white mb-3 leading-tight">{cs.campaign}</h3>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="font-display text-xl font-extrabold text-beast-yellow tracking-wide">{cs.stat}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">{cs.statLabel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-beast-pink group-hover:text-white transition-colors">
                      View Case Study
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
