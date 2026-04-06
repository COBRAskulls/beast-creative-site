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

export default function SweetSensiPage() {
  return (
    <>
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

      <section className="bg-[#111111] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="e-commerce" />
            <StatCounter value={9.5} suffix="%" decimals={1} label="Email CTR" sublabel="vs 0.82% avg" />
            <StatCounter value={29.1} suffix="%" decimals={1} label="Email Open Rate" sublabel="vs 24% avg" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 space-y-10">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              Sweet Sensi needed to grow e-commerce MRR in the highly regulated CBD industry — where most ad platforms restrict or ban direct advertising. Traditional paid social wasn&apos;t a viable primary channel.
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
            <blockquote className="border-l-4 border-beast-pink pl-6">
              <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                &quot;Beast Creative Agency sent Sweet Sensi&apos;s sales through the roof and grew their MRR over 500%. Rigorous testing proved the SEO + social combo prints money.&quot;
              </p>
              <footer className="mt-3 text-sm text-gray-500">— Rubi Navarro, Social Media Manager</footer>
            </blockquote>
          </AnimatedSection>
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
