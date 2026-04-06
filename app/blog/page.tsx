import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog | CPG Marketing & AI Strategy Insights | Beast Creative Agency",
  description:
    "Insights, strategy, and data-driven thinking from the Beast team — covering CPG marketing, SEO/AEO, paid media, AI marketing, and branding.",
};

const posts = [
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO? How to Make Your Brand Appear in ChatGPT, Gemini, and Perplexity",
    excerpt: "AI search tools are answering 30%+ of queries that used to go to Google. Here's how to structure your content to get cited — not just ranked.",
    category: "SEO/AEO",
    date: "March 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "cpg-sweepstakes-first-party-data-playbook",
    title: "The CPG Sweepstakes Playbook: How to Build a Consumer Database That Impresses Retail Buyers",
    excerpt: "We've run sweepstakes campaigns that generated 36,581 entries on $6,000. Here's the exact framework — from mechanic design to data strategy.",
    category: "CPG Marketing",
    date: "March 14, 2026",
    readTime: "8 min read",
  },
  {
    slug: "ai-content-production-cpg-brands",
    title: "How CPG Brands Can Create 30x More Content Without 30x the Budget",
    excerpt: "900 recipes. 50 SKUs. AI-powered content pipelines. Here's how Beast processes a client's entire content library into months of social assets.",
    category: "AI Marketing",
    date: "February 22, 2026",
    readTime: "5 min read",
  },
  {
    slug: "multi-brand-seo-holding-companies",
    title: "Multi-Brand SEO: Why Holding Companies Are Cannibalizing Their Own Search Rankings",
    excerpt: "If you manage 3+ consumer brands on separate domains, you're probably hurting your SEO. Here's the unified domain architecture that fixes it.",
    category: "SEO/AEO",
    date: "February 8, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F0F] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Blog</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Insights & Strategy From the Beast Team.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Data-driven thinking on CPG marketing, SEO/AEO, AI content, and what actually moves the needle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-[#FAFAFA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <Link href={`/blog/${posts[0].slug}`} className="group block">
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="h-1.5 bg-beast-pink" />
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                      {posts[0].category}
                    </span>
                    <span className="text-xs text-gray-400">{posts[0].date}</span>
                    <span className="text-xs text-gray-400">{posts[0].readTime}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black mb-4 leading-tight group-hover:text-beast-pink transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">{posts[0].excerpt}</p>
                  <span className="btn-ghost-pink">Read Article →</span>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-[#FAFAFA] pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="h-1.5 bg-beast-pink" />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-beast-black mb-3 leading-tight flex-1 group-hover:text-beast-pink transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <span className="btn-ghost-pink text-sm">Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
