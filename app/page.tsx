import Link from "next/link";
import type { Metadata } from "next";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroHeadline from "@/components/ui/HeroHeadline";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "@/components/forms/ContactForm";
import ClientListSection from "@/components/ui/ClientListSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Marketing Agency in San Antonio, TX | Beast Creative",
  description:
    "San Antonio CPG marketing agency helping food, beverage, and consumer brands scale to Walmart and beyond with SEO, paid media, and AI-driven campaigns.",
  openGraph: {
    title: "CPG Marketing Agency in San Antonio, TX | Beast Creative",
    description:
      "San Antonio CPG marketing agency helping food, beverage, and consumer brands scale to Walmart and beyond with SEO, paid media, and AI-driven campaigns.",
    type: "website",
    url: "https://beastcreativeagency.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPG Marketing Agency in San Antonio, TX | Beast Creative",
    description:
      "San Antonio CPG marketing agency helping food, beverage, and consumer brands scale to Walmart and beyond with SEO, paid media, and AI-driven campaigns.",
  },
  alternates: {
    canonical: "https://beastcreativeagency.com",
  },
};

const caseStudies = [
  {
    client: "Williams Foods",
    campaign: "Back-to-School Sweepstakes",
    heroStat: "22,043",
    heroStatLabel: "entries on $4K budget",
    description: "Precision targeting + low-friction mechanic drove 2.2x over the 10,000-entry goal at $0.18 CPC.",
    category: "CPG Marketing",
    href: "/work/williams-bts",
  },
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — Walmart Rollout",
    heroStat: "7.03%",
    heroStatLabel: "CTR vs 0.89% avg",
    description: "36,581 consumer emails collected on $6,000 — nearly 8x industry benchmark CTR.",
    category: "CPG Marketing",
    href: "/work/sun-bird",
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    description: "SEO + social combo cracked the code on CBD marketing restrictions — monthly revenue up 500%+.",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
  },
];

const services = [
  {
    name: "CPG Marketing",
    desc: "Sweepstakes, first-party data collection, and retail-ready campaigns for food and beverage brands.",
    href: "/services/cpg-marketing",
    featured: true,
  },
  {
    name: "SEO + AEO",
    desc: "Rank in Google AND get cited by ChatGPT, Gemini, and Perplexity — traditional SEO meets AI search.",
    href: "/services/seo-aeo",
  },
  {
    name: "Paid Media",
    desc: "AI-optimized Facebook, Instagram, TikTok, and Google campaigns with real-time creative testing.",
    href: "/services/paid-media",
  },
  {
    name: "AI Content Production",
    desc: "Recipe videos, product demos, and social content at scale — produced with AI at 90%+ lower cost.",
    href: "/services/content-production",
  },
  {
    name: "Branding & Identity",
    desc: "Brand naming, visual systems, and identities that create instant recognition and lasting recall.",
    href: "/services/branding",
  },
  {
    name: "Web Design & CRO",
    desc: "Conversion-focused builds, mobile-first, performance-optimized to turn traffic into revenue.",
    href: "/services/web-design",
  },
  // TODO: Add Email Marketing service page at /services/email-marketing
  // TODO: Add Social Media service page at /services/social-media
];

// TODO: Consider promoting Williams All-Stars (13,660 entries), Williams Bowl ($1,500 budget),
// Pioneer (ROAS), or Coinline (branding) to homepage grid when 4-column layout is desired

const process = [
  { step: "01", name: "Discover", desc: "Deep-dive audit and competitor gap analysis. We find where your brand is losing ground and where the fastest wins are hiding." },
  { step: "02", name: "Strategize", desc: "A campaign plan built around your specific goals, audience, and budget — not a template pulled from a drawer." },
  { step: "03", name: "Execute", desc: "Creative launches. Media runs. Content goes live. We move fast and optimize faster — daily monitoring, real-time pivots." },
  { step: "04", name: "Optimize", desc: "Monthly reporting, A/B testing, and continuous refinement. We don't set it and forget it." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />
        <div className="hero-ambient-glow" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">
              CPG Marketing Agency · San Antonio, TX · Serving Brands Nationally
            </p>
          </AnimatedSection>

          <HeroHeadline />

          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white/60 max-w-3xl mb-6">
              We Don&apos;t Claim Results. We Document Them.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative Agency is a CPG marketing agency based in San Antonio, TX helping food, beverage, and consumer brands go national. Every result on this site is real, named, and verified — sweepstakes, paid social, SEO, and AI-enhanced content backed by numbers that hold up under scrutiny.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
              </MagneticButton>
              <IconButton href="/work" icon="eye" variant="ghost">See Our Work</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TODO: Add agency-level stats bar when verified: total clients served, team headcount, total articles published */}
      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0} variant="fadeUp">
              <StatCounter value={36581} label="Contest Entries" sublabel="vs 10K goal — 3.6x" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.08} variant="fadeUp">
              <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.16} variant="fadeUp">
              <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.24} variant="fadeUp">
              <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="Sweet Sensi" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ClientListSection />

      {/* INTRO COPY */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Who We Are</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-6">
                Beast Creative.
              </h2>
              <p className="text-body-lead text-gray-600 mb-4">
                At Beast Creative Agency — San Antonio&apos;s CPG-specialist marketing team — we don&apos;t hide behind strategy decks and vanity metrics. We show you the numbers, the work, and the results — every single month.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020 in San Antonio, TX, we&apos;re a team of strategists, creatives, and AI-powered operators working with food, beverage, and consumer brands nationwide. We specialize in CPG brands scaling from regional to national — and with ambitious businesses who are tired of agencies that talk more than they deliver.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="font-display font-semibold text-beast-black text-sm uppercase tracking-widest mb-5">Who We Serve:</p>
                <ul className="space-y-4">
                  {[
                    "CPG food & beverage brands scaling from regional to national retail distribution",
                    "Emerging CPG brands breaking into Walmart, Target, Kroger, or regional chains",
                    "Multi-brand holding companies with fragmented digital presence",
                    "Ambitious brands ready to grow nationally",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-beast-pink mt-0.5 font-bold text-lg leading-none" aria-hidden="true">→</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/about" className="btn-ghost-pink text-sm">
                    Meet the Team →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">Proven Results</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-4">
              Work That Speaks For Itself.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Not projections. Not case studies from other agencies. These are our campaigns, our clients, and our real numbers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.href} delay={i * 0.1} className="h-full">
                <Link href={cs.href} className="group block h-full">
                  <article className="h-full bg-beast-black rounded-2xl overflow-hidden border border-white/10 hover:border-beast-pink/50 hover:shadow-[0_0_40px_rgba(255,17,152,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-beast-pink">
                          {cs.client}
                        </p>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/8 text-gray-400 border border-white/10">
                          {cs.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-6 leading-tight">
                        {cs.campaign}
                      </h3>
                      <div className="mb-5">
                        <div className="font-display text-5xl font-extrabold text-beast-yellow tracking-wide leading-none mb-1">
                          {cs.heroStat}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {cs.heroStatLabel}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed flex-1">{cs.description}</p>
                      <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                        <span className="text-sm font-bold text-beast-pink group-hover:text-white transition-colors">
                          View Case Study
                        </span>
                        <span className="w-8 h-8 rounded-full bg-beast-pink/15 border border-beast-pink/30 flex items-center justify-center group-hover:bg-beast-pink transition-all duration-200" aria-hidden="true">
                          <svg className="w-3.5 h-3.5 text-beast-pink group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <IconButton href="/work" icon="work" variant="white">View All Case Studies</IconButton>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Full-Service. Full Commitment.
            </h2>
          </AnimatedSection>

          {/* CPG Marketing — Flagship featured card */}
          <AnimatedSection className="mb-4">
            <Link href="/services/cpg-marketing" className="group block">
              <div className="relative rounded-2xl overflow-hidden bg-beast-pink p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/25 mb-5">
                    Flagship Service
                  </span>
                  <div aria-hidden="true" className="font-display text-8xl lg:text-[10rem] font-black text-white/10 leading-none -mb-2 select-none">01</div>
                  <h3 className="font-display text-3xl lg:text-5xl font-black text-white leading-tight">CPG Marketing</h3>
                </div>
                <div className="lg:max-w-sm shrink-0">
                  <p className="text-white/80 leading-relaxed mb-6">
                    Sweepstakes, first-party data collection, and retail-ready campaigns for food and beverage brands going national.
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-[gap] duration-200">
                    Explore Service <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Remaining 5 services — numbered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(1).map((svc, i) => (
              <AnimatedSection key={svc.href} delay={(i + 1) * 0.07}>
                <Link href={svc.href} className="group block h-full">
                  <div className="h-full p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-beast-pink/40 hover:bg-near-black transition-all duration-300 flex flex-col">
                    <div aria-hidden="true" className="font-display text-5xl font-black text-beast-yellow/20 leading-none mb-4 select-none">
                      0{i + 2}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{svc.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{svc.desc}</p>
                    <span className="text-beast-pink text-sm font-semibold group-hover:text-white transition-colors">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CPG CALLOUT BANNER */}
      <section className="bg-section-near-dark relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,64,0.06)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">For CPG Brands</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6 max-w-3xl mx-auto">
              Is Your Brand Ready for Walmart?{" "}
              <span className="text-beast-pink">Your Marketing Should Be First.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              We&apos;ve helped CPG food and beverage brands build the consumer databases, engagement metrics, and retail-readiness proof that retail buyers at Walmart, Target, H-E-B, and Kroger demand. Walk in with data — not hope.
            </p>
            <IconButton href="/cpg" icon="cpg">See Our CPG Playbook</IconButton>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Four Steps. No Black Box.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:border-beast-pink hover:shadow-lg transition-all duration-200 flex flex-col">
                  <span className="font-mono text-xs font-bold text-beast-pink tracking-widest mb-3">{step.step}</span>
                  <h3 className="font-display text-xl font-bold text-beast-black mb-3">{step.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-near-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Let&apos;s Talk</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
                Ready to Stop Guessing and Start Growing?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Book a free 15-minute strategy call. No pitch deck. No commitments. Just an honest conversation about what&apos;s working, what isn&apos;t, and what Beast can do for your brand.
              </p>
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
              <p className="text-beast-yellow text-sm mt-4">
                Or text us directly:{" "}
                <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
