import Link from "next/link";
import type { Metadata } from "next";
import Marquee from "@/components/ui/Marquee";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Beast Creative Agency | AI-Powered Digital Marketing in San Antonio, TX",
  description:
    "Beast Creative Agency helps CPG brands and ambitious businesses dominate their markets — with campaigns backed by real data, AI-enhanced execution, and results you can take to the boardroom.",
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
    bgColor: "bg-[#1A1A1A]",
  },
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — Walmart Rollout",
    heroStat: "7.03%",
    heroStatLabel: "CTR vs 0.89% avg",
    description: "36,581 consumer emails collected on $6,000 — nearly 8x industry benchmark CTR.",
    category: "CPG Marketing",
    href: "/work/sun-bird",
    bgColor: "bg-[#111111]",
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    description: "SEO + social combo cracked the code on CBD marketing restrictions — monthly revenue up 500%+.",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
    bgColor: "bg-[#1A1A1A]",
  },
];

const services = [
  {
    icon: "🎯",
    name: "CPG Marketing",
    desc: "Sweepstakes, first-party data collection, and retail-ready campaigns for food and beverage brands.",
    href: "/services/cpg-marketing",
  },
  {
    icon: "🔍",
    name: "SEO + AEO",
    desc: "Rank in Google AND get cited by ChatGPT, Gemini, and Perplexity — traditional SEO meets AI search.",
    href: "/services/seo-aeo",
  },
  {
    icon: "📈",
    name: "Paid Media",
    desc: "AI-optimized Facebook, Instagram, TikTok, and Google campaigns with real-time creative testing.",
    href: "/services/paid-media",
  },
  {
    icon: "⚡",
    name: "AI Content Production",
    desc: "Recipe videos, product demos, and social content at scale — produced with AI at 90%+ lower cost.",
    href: "/services/content-production",
  },
  {
    icon: "✦",
    name: "Branding & Identity",
    desc: "Brand naming, visual systems, and identities that create instant recognition and lasting recall.",
    href: "/services/branding",
  },
  {
    icon: "💻",
    name: "Web Design & CRO",
    desc: "Conversion-focused builds, mobile-first, performance-optimized to turn traffic into revenue.",
    href: "/services/web-design",
  },
];

const whyBeast = [
  {
    title: "AI-Enhanced Campaigns",
    desc: "Proprietary AI tools and Sagundo, our in-house AI agent, optimize targeting, generate creative variants, and surface insights that manual analysis misses.",
  },
  {
    title: "Radical Transparency",
    desc: "Dedicated Slack channel, weekly Loom updates, Looker dashboards showing revenue — not vanity metrics. If something isn't working, you hear it from us first.",
  },
  {
    title: "Proven CPG Results",
    desc: "22,043 entries on a $4,000 budget. 36,581 emails at $0.12 CPC. Our playbook is built on real CPG campaigns with named brands you can verify.",
  },
  {
    title: "Senior-Level Focus",
    desc: "We keep our roster selective. Every account gets direct access to senior strategists — not handoffs to junior account managers.",
  },
];

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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-beast-black to-[#111111]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,204,64,0.08)_0%,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">
              AI-Powered Digital Marketing Agency · San Antonio, TX
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6">
              Marketing That Doesn&apos;t Just Look Good.
              <br />
              <span className="text-beast-pink">It Performs.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative Agency helps CPG brands and ambitious businesses dominate their markets — with campaigns backed by real data, AI-enhanced execution, and results you can take to the boardroom.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get My Free Strategy Call →
              </Link>
              <Link href="/work" className="btn-secondary-dark text-base px-8 py-4">
                See Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#111111] border-y border-beast-pink/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
            <StatCounter value={36581} label="Contest Entries" sublabel="vs 10K goal — 3.6x" />
            <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" />
            <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" />
            <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="Sweet Sensi" />
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className="bg-[#111111] py-8 overflow-hidden">
        <p className="section-eyebrow text-gray-600 text-center mb-6">Client List</p>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {["Williams Foods", "Sun-Bird Seasonings", "Coinline", "Sweet Sensi", "Pioneer", "RFSA", "Williams Foods", "Sun-Bird Seasonings", "Coinline", "Sweet Sensi", "Pioneer", "RFSA"].map((client, i) => (
              <span key={i} className="font-display font-bold text-xl text-white/20 whitespace-nowrap hover:text-white/60 transition-colors px-8">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Who We Are</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-6">
                We Are Beast.
              </h2>
              <p className="text-body-lead text-gray-600 mb-4">
                At Beast Creative Agency, we don&apos;t hide behind strategy decks and vanity metrics. We show you the numbers, the work, and the results — every single month.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re a team of strategists, creatives, and AI-powered operators based in San Antonio, TX. We work with CPG brands scaling from regional to national, and with ambitious local businesses who are tired of agencies that talk more than they deliver.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="font-display font-semibold text-beast-black text-sm uppercase tracking-widest mb-5">Who We Serve:</p>
                <ul className="space-y-4">
                  {[
                    "CPG food & beverage brands going from regional to national distribution",
                    "Multi-brand holding companies with fragmented digital presence",
                    "San Antonio and South Texas businesses ready to grow",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-beast-pink mt-0.5 font-bold text-lg leading-none">→</span>
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
                      {/* Client + category */}
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-beast-pink">
                          {cs.client}
                        </p>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/8 text-gray-400 border border-white/10">
                          {cs.category}
                        </span>
                      </div>
                      {/* Campaign title */}
                      <h3 className="font-display text-xl font-bold text-white mb-6 leading-tight">
                        {cs.campaign}
                      </h3>
                      {/* Hero stat — large + prominent */}
                      <div className="mb-5">
                        <div className="font-display text-5xl font-extrabold text-beast-yellow tracking-wide leading-none mb-1">
                          {cs.heroStat}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {cs.heroStatLabel}
                        </div>
                      </div>
                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed flex-1">{cs.description}</p>
                      {/* CTA */}
                      <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                        <span className="text-sm font-bold text-beast-pink group-hover:text-white transition-colors">
                          View Case Study
                        </span>
                        <span className="w-8 h-8 rounded-full bg-beast-pink/15 border border-beast-pink/30 flex items-center justify-center group-hover:bg-beast-pink transition-all duration-200">
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
            <Link href="/work" className="btn-secondary-dark text-sm px-8 py-3">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Full-Service. Full Commitment.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.07}>
                <Link href={svc.href} className="group block">
                  <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] hover:border-beast-pink/40 hover:bg-[#111111] transition-all duration-300 h-full">
                    <div className="text-2xl mb-4">{svc.icon}</div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{svc.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{svc.desc}</p>
                    <span className="text-beast-pink text-sm font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BEAST */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">Why Beast</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Not Just Another Agency.{" "}
              <span className="text-beast-pink">Your Partners in Growth.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBeast.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="w-10 h-10 rounded-xl bg-beast-pink/10 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-beast-pink" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-beast-black mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CPG CALLOUT BANNER */}
      <section className="bg-[#0D0D0D] relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,64,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">For CPG Brands</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6 max-w-3xl mx-auto">
              Is Your Brand Ready for Walmart?{" "}
              <span className="text-beast-pink">Your Marketing Should Be First.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              We&apos;ve helped CPG food and beverage brands build the consumer databases, engagement metrics, and retail-readiness proof that retail buyers demand. Walk in with data — not hope.
            </p>
            <Link href="/cpg" className="btn-primary text-base px-10 py-4">
              See Our CPG Playbook →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              From Discovery to Domination.
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

      {/* MARQUEE DIVIDER */}
      <Marquee
        items={["AI-Powered Results", "Real Numbers", "Proven CPG Growth", "Data-Driven Strategy", "Radical Transparency"]}
      />

      {/* FINAL CTA */}
      <section className="bg-[#111111] py-16 lg:py-24">
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
              <a
                href="https://calendar.app.google/9q1mcYgEdXNyjK8G6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 inline-flex mb-4"
              >
                Book My Free Strategy Call →
              </a>
              <p className="text-gray-500 text-sm">
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
