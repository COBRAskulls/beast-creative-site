import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  title: "Sweet Sensi E-Commerce Growth Case Study | 500%+ MRR | Beast Creative",
  description:
    "How Beast Creative Agency drove 500%+ MRR growth for Sweet Sensi CBD brand through SEO + social strategy in a highly regulated industry.",
};

const results = [
  { value: 500, suffix: "%+", label: "MRR Growth", sublabel: "e-commerce" },
  { value: 9.5, suffix: "%", decimals: 1, label: "Email CTR", sublabel: "vs 0.82% avg" },
  { value: 29.1, suffix: "%", decimals: 1, label: "Email Open Rate", sublabel: "vs 24% avg" },
];

export default function SweetSensiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["SEO", "Social Media", "E-Commerce"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Sweet Sensi · 2023–2024</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              <span className="text-beast-pink">500%+</span>{" "}
              MRR Growth in a Regulated Industry.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              The SEO + social combo that cracked CBD marketing — and proved the compounding effect of two channels working together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#111111] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">
                  Sweet Sensi needed to grow e-commerce MRR in the highly regulated CBD industry — where most ad platforms restrict or ban direct advertising. Traditional paid social wasn&apos;t a viable primary channel. They needed a strategy that worked within the rules and still scaled.
                </p>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beast developed a two-channel strategy that worked within CBD advertising constraints:
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Rigorous SEO", desc: "Technical optimization + content strategy targeting CBD product and wellness keywords that convert. Built domain authority through compliant content." },
                    { title: "Scroll-Stopping Social Campaigns", desc: "Organic and compliant paid social content that built community and drove traffic — within platform rules." },
                    { title: "Pairing Test", desc: "Systematic A/B testing proved the SEO + social combo had a compounding effect — each channel amplified the other." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="text-beast-pink font-bold mt-1 shrink-0">→</span>
                      <div>
                        <strong className="text-beast-black">{item.title}:</strong>{" "}
                        <span className="text-gray-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Results</h2>
                <blockquote className="border-l-4 border-beast-pink pl-6">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;Beast Creative Agency sent Sweet Sensi&apos;s sales through the roof and grew their MRR over 500%. Rigorous testing proved the SEO + social combo prints money.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— Rubi Navarro, Social Media Manager</footer>
                </blockquote>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-gray-500 mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Sweet Sensi" },
                    { label: "Industry", value: "CBD / E-Commerce" },
                    { label: "Year", value: "2023–2024" },
                    { label: "Services", value: "SEO, Content, Social Media" },
                    { label: "Challenge", value: "Restricted ad platforms" },
                    { label: "Result", value: "500%+ MRR growth" },
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
                    { metric: "Email CTR", beast: "9.5%", industry: "0.82%", lift: "11.6x" },
                    { metric: "Email Open", beast: "29.1%", industry: "24%", lift: "21% higher" },
                    { metric: "MRR", beast: "500%+", industry: "baseline", lift: "5x growth" },
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

      <RelatedCaseStudies related={["sun-bird", "williams-bts", "coinline"]} />

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
