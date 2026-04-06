import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Coinline Brand Identity Case Study | Beast Creative Agency",
  description:
    "How Beast Creative Agency named and branded Coinline — a modern arcade concept that fuses retro gaming nostalgia with contemporary digital culture.",
};

export default function CoinlinePage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Branding", "Naming", "Identity Design"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-gray-500 mb-3">Case Study — Coinline · 2024–2025</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              A Name That Needs{" "}
              <span className="text-beast-pink">Zero Explanation.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Brand naming and identity for a modern arcade concept — where retro gaming nostalgia meets next-generation culture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 space-y-10">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Brief</h2>
            <p className="text-gray-600 leading-relaxed">
              Name and brand a modern-era arcade that hits nostalgia buttons for gamers young and old — something that feels both retro and completely fresh.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Extensive gaming-culture research revealed the perfect name: <strong className="text-beast-black">Coinline</strong>. The name fuses the quarter-fed nostalgia of classic arcades with a modern, digital-era sensibility. &quot;Coin&quot; signals retro gaming immediately. &quot;Line&quot; suggests multiplayer, queue, progress — the language of modern gaming.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With the name locked, brand identity design flowed naturally: retro-modern graphic language combining pixel aesthetics with contemporary typography, a color palette that pops in dark environments, and brand assets with built-in momentum for go-to-market activation.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Results</h2>
            <ul className="space-y-3">
              {[
                "Brand name that required zero explanation — audiences got it immediately",
                "Visual identity that works across digital, environmental, and merchandise applications",
                "Built-in brand narrative: nostalgia meets next-generation",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <span className="text-beast-pink font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-beast-pink pl-6 mt-8">
              <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                &quot;Extensive gaming-culture research revealed the perfect name: Coinline. Its retro-modern edge made brand identity effortless, fusing classic and modern graphics with plenty of momentum for go-to-market strategies.&quot;
              </p>
              <footer className="mt-3 text-sm text-gray-500">— John Speer, Co-Owner / COO</footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready for a Brand That Speaks for Itself? →</h2>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">Get My Free Strategy Call →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
