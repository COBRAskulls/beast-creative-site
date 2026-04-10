import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "What Is AEO (Answer Engine Optimization)? | Beast Creative Agency",
  description:
    "AEO is the practice of structuring content to be cited by AI answer engines like ChatGPT, Gemini, and Perplexity. Learn what it is, how it works, and how to do it.",
};

const faqs = [
  {
    question: "What is AEO (Answer Engine Optimization)?",
    answer:
      "AEO (Answer Engine Optimization) is the practice of structuring web content to be cited and recommended by AI-powered answer engines — including ChatGPT, Gemini, Perplexity, and Claude. Unlike traditional SEO which optimizes for search engine rankings, AEO optimizes for direct citation in AI-generated answers.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer:
      "Traditional SEO gets your page ranked in search results. AEO gets your content cited as the answer inside AI tools. SEO drives click-through traffic. AEO drives brand authority — your brand name appears as the source when someone asks an AI a question in your category.",
  },
  {
    question: "Which AI tools does AEO target?",
    answer:
      "AEO targets ChatGPT (OpenAI), Gemini (Google), Perplexity, Claude (Anthropic), and Google's AI Overviews in Search. Each uses slightly different citation logic, but all reward content that is clearly structured, factually dense, and authoritative.",
  },
  {
    question: "How long does AEO take to work?",
    answer:
      "AEO citation can happen faster than traditional SEO if your content is the clearest, most authoritative answer to a specific question — sometimes within weeks. Building consistent citation across multiple AI platforms typically takes 2–4 months of dedicated content strategy.",
  },
  {
    question: "Do I need AEO if I already do SEO?",
    answer:
      "Yes. Google search and AI search are separate channels. An estimated 30%+ of informational queries now go to AI tools first. Brands that only optimize for Google are invisible to a growing portion of their market. SEO and AEO are complementary — not substitutes.",
  },
];

export default function AeoPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "What Is AEO? How to Make Your Brand Appear in ChatGPT, Gemini, and Perplexity",
            description:
              "AEO is the practice of structuring content to be cited by AI answer engines. Learn what it is, how it works, and how to do it.",
            datePublished: "2026-03-28",
            author: {
              "@type": "Organization",
              name: "Beast Creative Agency",
              url: "https://beastcreativeagency.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Beast Creative Agency",
              url: "https://beastcreativeagency.com",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                SEO/AEO
              </span>
              <span className="text-xs text-gray-500">March 28, 2026 · 6 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              What Is AEO? How to Make Your Brand Appear in{" "}
              <span className="text-beast-pink">ChatGPT, Gemini, and Perplexity</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              AI search tools are answering 30%+ of queries that used to go to Google. Here&apos;s how to structure your content to get cited — not just ranked.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Short Answer</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>AEO (Answer Engine Optimization)</strong> is the practice of structuring your content so that AI-powered tools — ChatGPT, Gemini, Perplexity, and Google AI Overviews — cite your brand as the authoritative answer to questions in your category.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Traditional SEO gets you ranked. AEO gets you <em>cited</em>. Those are increasingly different things.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Why AEO Is No Longer Optional</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Search behavior has fundamentally shifted. When someone wants to know "what&apos;s the best CPG marketing agency" or "how do I build first-party consumer data," a growing percentage of them type that question directly into ChatGPT or Perplexity — not Google.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The brands that appear in those answers aren&apos;t just getting traffic. They&apos;re being positioned as the authoritative source in their category — by an AI tool that millions of people trust to give them the best answer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Brands that only optimize for Google are now invisible to that entire channel.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">How AEO Is Different From SEO</h2>
              <div className="bg-[#FAFAFA] rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-display font-bold text-beast-black text-sm uppercase tracking-widest mb-3">Traditional SEO</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>→ Rank in Google results</li>
                      <li>→ Optimize for keywords</li>
                      <li>→ Drive click-through traffic</li>
                      <li>→ Measured by rankings &amp; visits</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-display font-bold text-beast-pink text-sm uppercase tracking-widest mb-3">AEO</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>→ Get cited in AI answers</li>
                      <li>→ Optimize for questions &amp; entities</li>
                      <li>→ Build category authority</li>
                      <li>→ Measured by citation &amp; brand mentions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                These aren&apos;t mutually exclusive — a strong SEO foundation supports AEO. But AEO requires its own content strategy layer on top of traditional optimization.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">What AI Systems Prefer to Cite</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based on how large language models work and how citation logic is built into tools like Perplexity and Google AI Overviews, AI systems consistently favor content that:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Defines things clearly", detail: "\"AEO is X\" format. Definitive statements, not hedged explanations." },
                  { label: "Uses entity-rich language", detail: "Named brands, specific numbers, dates, platform names. The more concrete, the more citable." },
                  { label: "Answers questions directly", detail: "FAQ sections with clear question-answer structure perform significantly better for AI citation than narrative prose alone." },
                  { label: "Is internally consistent", detail: "The same facts stated the same way across multiple pages build model confidence that the information is accurate." },
                  { label: "Has structured data markup", detail: "Schema.org FAQ, Article, and Organization markup signals exactly what type of content you have and what it covers." },
                  { label: "Is authoritative", detail: "Domain authority, external citations, and named authorship all increase the probability of AI citation." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="text-beast-pink font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The 5 Core AEO Tactics</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">1. FAQ Sections With Schema Markup</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                FAQ sections that use Schema.org FAQPage markup are directly indexed by Google for AI Overviews and People Also Ask. They also provide the question-answer format that language models are specifically trained to extract and cite. Every service page and every blog post should have a FAQ section.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">2. Entity Definition Pages</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Create dedicated content that definitively answers "what is X" for every key term in your category. "What is CPG marketing," "What is first-party consumer data," "What is a retail readiness deck." These pages become citation targets when users ask those questions to AI tools.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">3. Named, Verified Case Studies</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI systems trust named entities over anonymous claims. "A CPG brand achieved 36,581 email entries" is much weaker than "Sun-Bird Seasonings generated 36,581 consumer email addresses on a $6,000 budget for their national Walmart rollout in 2021." The specificity and verifiability of named case studies dramatically increases citation probability.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">4. Consistent Topical Authority</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Publish multiple pieces of content that cover a topic from multiple angles. An agency that has 8 pages covering CPG marketing — a service page, a blog post, a case study, an FAQ page, an about-page mention, a glossary entry — signals stronger topical authority than one with a single service page.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">5. Organization and Article Schema</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Organization schema tells Google and AI systems who you are, what you do, where you&apos;re located, and what your authoritative sources are. Article schema on blog posts signals authorship, publication date, and content type — all signals that feed into citation decisions.
              </p>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast&apos;s AEO Practice</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Beast Creative Agency is one of the few agencies offering AEO as a formal service — building integrated SEO + AEO strategies that optimize content for both Google rankings and AI citation. We&apos;ve built this practice because we believe it represents the next major shift in how brands get discovered.
                </p>
                <IconButton href="/services/seo-aeo" icon="arrow">
                  See Our SEO + AEO Service </IconButton>
              </div>

            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-6 mt-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[#FAFAFA] rounded-xl p-6 border border-gray-100">
                  <p className="font-display font-bold text-beast-black mb-2">{faq.question}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Show Up in AI Search?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast builds integrated SEO + AEO strategies for brands that want to win both channels.
            </p>
            <IconButton href="/contact" icon="calendar">
              Get My Free Strategy Call </IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
