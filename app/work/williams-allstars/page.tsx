import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Williams All-Stars March Madness Case Study | Beast Creative Agency",
  description:
    "Digital trading card campaign generated 13,660 entries in 24 days for Williams Foods. A gamified March Madness mechanic that created repeat engagement and brand loyalty.",
};

const results = [
  { value: 13660, label: "Total Entries", sublabel: "in 24 days" },
  { value: 200475, label: "Total Reach", sublabel: "campaign total" },
  { value: 3273, label: "Link Clicks", sublabel: "direct" },
  { value: 8, label: "Trading Cards", sublabel: "unique designs" },
];

export default function WilliamsAllstarsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["CPG Marketing", "Campaign Design", "Paid Social"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Williams Foods · 2022</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Digital Trading Cards.{" "}
              <span className="text-beast-pink">13,660 Entries. 24 Days.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              The March Madness campaign that turned passive viewers into active collectors — and proved gamification drives CPG results.
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
                <p className="text-gray-600 leading-relaxed">
                  Williams Foods needed a March Madness campaign that would break through the noise and generate genuine consumer engagement — not just impressions. The brand wanted something fans would actively participate in and share, while building a consumer database for future marketing use.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beast designed a <strong className="text-beast-black">digital sneaker trading card collection mechanic</strong> — 8 unique Williams-branded collector cards featuring signature recipes and redeemable for real prizes: custom Williams sneakers, a Williams cooler, and a custom grill. Consumers collected cards by engaging with the campaign across digital touchpoints across a 24-day window.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This gamified approach transformed passive viewers into active participants, driving repeat engagement and social sharing organically.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Why It Worked</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The collect-and-win mechanic created a sense of urgency and completionism that standard sweepstakes don&apos;t achieve. Each card was tied to a recipe, reinforcing product usage while building collector behavior. The prize structure was aspirational enough to drive sharing without being off-brand.
                </p>
                <blockquote className="border-l-4 border-beast-pink pl-6 my-6">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;We built and deployed Williams a ground-up campaign: digital sneaker trading cards with signature recipes and prizes — igniting fan frenzy.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— Kyle Ossinger, Creative Director</footer>
                </blockquote>
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
                    { label: "Year", value: "2022" },
                    { label: "Campaign", value: "March Madness Trading Cards" },
                    { label: "Duration", value: "24 days" },
                    { label: "Result", value: "13,660 entries" },
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
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">Campaign Mechanics</h3>
                  {[
                    { metric: "Format", beast: "Trading Cards", detail: "8 unique designs" },
                    { metric: "Prizes", beast: "Sneakers + Grill", detail: "aspirational rewards" },
                    { metric: "Entries", beast: "13,660", detail: "24-day window" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4">
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{row.metric}</p>
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-beast-pink text-lg">{row.beast}</span>
                        <span className="text-xs text-gray-600">{row.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["sun-bird", "williams-bts", "williams-bowl"]} />

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
