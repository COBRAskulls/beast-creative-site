import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Branding Agency San Antonio | Brand Identity & Naming | Beast Creative",
  description:
    "Brand naming, visual systems, and identities that create instant recognition. Beast Creative Agency, San Antonio TX — creators of Coinline and other standout brands.",
};

export default function BrandingPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-green mb-4">Service — Branding & Identity</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Brands That Don&apos;t Need{" "}
              <span className="text-beast-green">An Explanation.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Brand naming, visual systems, and identities built for instant recognition and long-term equity. We created Coinline — a name that required zero explanation the moment people heard it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Great branding isn&apos;t decoration — it&apos;s competitive advantage. The right name shortens every conversation. The right visual identity works across every touchpoint without losing power. We do the research to make that happen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t hand you a mood board and call it a brand. We deliver a system — name rationale, color theory, typography, usage rules, and go-to-market momentum baked in.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What We Deliver</h2>
              <ul className="space-y-3">
                {["Brand naming (primary + tagline)", "Logo design + variations", "Color palette with usage rules", "Typography system", "Brand voice and tone guide", "Visual identity system", "Brand standards document", "Go-to-market assets package"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-beast-green font-bold shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build a Brand That Sticks?</h2>
            <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">Get My Free Strategy Call →</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
