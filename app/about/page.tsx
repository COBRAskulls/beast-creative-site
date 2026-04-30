import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "About Beast Creative Agency | National Digital Marketing",
  description:
    "Meet the Beast team: strategists, creatives, and AI-powered operators working with brands nationwide. Built on proven CPG results and the kind of reporting most agencies avoid.",
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  isAI?: boolean;
}

const team: TeamMember[] = [
  {
    name: "Kyle Ossinger",
    title: "Creative Director",
    bio: "The creative force behind Beast's campaigns. Kyle translates brand briefs into campaign mechanics that people actually engage with, like the Williams All-Stars trading card system that generated 13,660 entries in 24 days.",
    initials: "KO",
  },
  {
    name: "John Speer",
    title: "Co-Owner / COO",
    bio: "The operational architect of Beast. John ensures every campaign runs on time, on budget, and on brand. He's the one who walks into client meetings with the numbers that close deals.",
    initials: "JS",
  },
  {
    name: "Rubi Navarro",
    title: "Social Media Manager",
    bio: "The strategist behind Beast's social campaigns. Rubi built and executed the content and community approach that drove Sweet Sensi's MRR growth over 500%.",
    initials: "RN",
  },
  {
    name: "Eric",
    title: "Web Development",
    bio: "Beast's web lead. Eric builds and maintains the client-facing digital experiences — from conversion-focused landing pages to full campaign sites, ensuring every build is fast, mobile-first, and on brand.",
    initials: "ER",
  },
  {
    name: "Edy",
    title: "Owner & Business Development",
    bio: "The connective tissue of Beast's client relationships. Edy brings the market intelligence and relationship-building that keeps Beast's roster growing with the right brands.",
    initials: "ED",
  },
  {
    name: "Segundo",
    title: "Proprietary AI Agent",
    bio: "Not a person. Doesn't sleep. Never misses a deadline. Segundo is Beast's in-house AI agent — handling content production, campaign analysis, and workflow automation so the humans can focus on strategy; he's the reason we move faster than agencies twice our size.",
    initials: "SEG",
    isAI: true,
  },
];

const values = [
  {
    name: "Relentless Curiosity",
    desc: "We never stop asking why. Why did that ad perform? Why did consumers respond to that hook? Why is your competitor growing faster? The answers live in the data: we go find them.",
  },
  {
    name: "Open Books",
    desc: "You'll never get a report full of graphs without context. You get Slack access, weekly Loom updates, and dashboards showing revenue, not vanity metrics. If something isn't working, we tell you before you notice.",
  },
  {
    name: "Data Driven Strategy",
    desc: "Every creative decision is informed by data. Every budget allocation is justified by results. Gut feelings are tested, not trusted. The campaigns that have generated 36,000+ entries at 7x industry CTR aren't lucky — they're built on this principle.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">About Us</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Built on Proof, Not Promises.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Beast Creative Agency was founded on a simple belief: marketing should be measurable, transparent, and powerful enough to actually change the trajectory of a business. We built the agency we wished existed — where creative energy and data-driven strategy aren&apos;t in tension, they&apos;re the same thing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Our Story</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-6">
                Built for Performance. Built for Scale.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded in San Antonio, TX and serving brands nationwide. Our specialty is CPG marketing, but our expertise spans everything a modern brand needs to compete and win.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe the best agencies are the ones that treat every campaign like it&apos;s their own money on the line — because the transparency we demand of ourselves is the same transparency we deliver to clients. You&apos;ll always know exactly where your budget went and what it returned.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From a $1,500 Williams Bowl campaign that proved a model, to a $6,000 Sun-Bird sweepstakes that generated 36,581 consumer emails for a national Walmart pitch. Everything we do is built on proof, not promises.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Three Values. No Exceptions.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={val.name} delay={i * 0.1}>
                <div className="bg-dark-surface rounded-2xl p-8 border border-dark-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-beast-pink/10 flex items-center justify-center mb-6">
                    <span className="text-beast-pink font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{val.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">The Team</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              The People Behind the Results.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="flex flex-col items-start">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${member.isAI ? "bg-beast-pink" : "bg-beast-black"}`}>
                    <span className={`font-display font-bold text-xl ${member.isAI ? "text-white" : "text-beast-pink"}`}>{member.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-beast-black mb-1">{member.name}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${member.isAI ? "text-beast-black" : "text-beast-pink"}`}>{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SAGUNDO */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Our Proprietary AI</p>
              <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal mb-4">
                Segundo: Beast&apos;s AI Agent
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Segundo is an internally-deployed AI agent that handles content updates, campaign analysis, meeting intelligence, and workflow automation. It&apos;s what makes our team faster, our content cheaper, and our campaigns smarter than agencies twice our size.
              </p>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-beast-pink/10 text-beast-pink border border-beast-pink/25">
                In active development — available to Scale-tier clients
              </span>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beast-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Book a free 15-minute call. No pitch deck, no commitments — just an honest conversation about what Beast can do for your brand.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
