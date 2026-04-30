import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Facebook and Instagram Ads for CPG Products: Creative and Targeting Best Practices | Beast Creative Agency",
  description:
    "Learn how to build Facebook and Instagram campaigns that convert CPG consumers — from video hooks and UGC strategies to advanced targeting and seasonal campaign optimization.",
};

const faqs = [
  {
    question: "Why is advertising CPG products on Facebook and Instagram different from other categories?",
    answer:
      "CPG consumers aren't actively problem-solving when they see your ad — they're browsing entertainment. You're interrupting a habit (not solving a problem), and you need to break through with content that earns attention before it sells. Additionally, most CPG purchases happen in stores, creating an attribution gap that requires dedicated measurement strategies.",
  },
  {
    question: "Does UGC really outperform professional creative for CPG on social?",
    answer:
      "Often yes, especially on Instagram and TikTok. Structured UGC — where you give creators light brand guidelines but let them produce in their natural style — consistently outperforms both fully polished brand content and unguided UGC. It carries authenticity signals that professional ads don't.",
  },
  {
    question: "What's the best video structure for CPG social ads?",
    answer:
      "Hook (0–3 seconds) to create curiosity or show an immediate benefit, Problem/Solution (3–8 seconds) showing a relatable challenge with your product as the answer, Proof (8–12 seconds) with results or testimonials, and CTA (12–15 seconds) with a clear next step. Most brands waste the opening 3 seconds — that's where campaigns are won or lost.",
  },
  {
    question: "How should CPG brands target on Facebook and Instagram?",
    answer:
      "Move beyond basic demographics. Stack interests to build qualified segments — rather than 'fitness,' combine 'meal prep,' 'time management,' and 'health supplements.' Build lookalike audiences from your highest-value customers, not just website visitors. Test broad targeting and let Facebook's algorithm find your buyers.",
  },
  {
    question: "How do you handle iOS attribution changes for CPG brands?",
    answer:
      "Prioritize first-party data collection and post-purchase surveys asking how customers discovered your brand. Use Conversions API alongside the pixel for more complete event data. Track brand search volume as a proxy for awareness. Accept that some attribution is permanently lost and focus on blended efficiency metrics rather than platform-reported ROAS alone.",
  },
];

export default function FacebookInstagramPost() {
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
            headline: "Facebook and Instagram Ads for CPG Products: Creative and Targeting Best Practices",
            description: "Build Facebook and Instagram campaigns that convert CPG consumers — from video hooks and UGC to advanced targeting.",
            datePublished: "2025-08-14",
            author: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
            publisher: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                Social Media Ads
              </span>
              <span className="text-xs text-gray-500">August 14, 2025 · 10 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Facebook and Instagram Ads for CPG Products:{" "}
              <span className="text-beast-pink">Creative and Targeting Best Practices</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              CPG ads on social must earn attention before they sell — consumers are scrolling for entertainment, not solutions. Here&apos;s the creative and targeting framework that converts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e53537149-1-1024x585.png"
                  alt="Facebook and Instagram ads for CPG brands"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The CPG Social Media Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPG brands face a distinct obstacle on social platforms: consumers aren&apos;t actively problem-solving when they see your ad. They&apos;re consuming entertainment. You&apos;re not meeting intent — you&apos;re interrupting a habit. Research consistently shows audiences respond better to platform-native content than overtly promotional material. UGC-style content frequently outperforms professional product photography.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The purchasing dynamic adds another layer: most CPG products involve short consideration periods but extended repurchase cycles. Someone who sees an energy drink ad today won&apos;t need another purchase for weeks — requiring a fundamentally different approach than direct-response advertising for high-consideration products.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Creative Best Practices That Drive CPG Conversions</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Lead With Benefits, Not Features</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;Fuel your 6 AM workout without the afternoon crash&quot; converts better than &quot;Contains advanced amino acid technology.&quot; Launch videos with end results — not products. Use conversational customer language, not marketing terminology. Emphasize emotional outcomes over technical attributes.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Video Structure That Actually Converts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">The opening 3 seconds determine campaign success. Most CPG brands waste this interval with logo animations. Instead:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Hook (0–3s): Generate curiosity or demonstrate an immediate benefit",
                  "Problem/Solution (3–8s): Present a relatable challenge with your product as the answer",
                  "Proof (8–12s): Display results, testimonials, or demonstrations",
                  "CTA (12–15s): Clear next step with urgency",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e53e3cbdb-1.png"
                  alt="CPG social media targeting strategies"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Platform-Specific Creative</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Facebook and Instagram demand different creative despite reaching similar audiences:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Facebook: longer-form educational content, product-as-solution framing, detailed explanations",
                  "Instagram: instant visual impact, lifestyle-focused material, aspirational integration",
                  "Both: platform-native look — not transplanted print advertising",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Advanced Targeting Strategies</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Interest Stacking for Precision Targeting</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Single interests create excessively broad audiences. Stack them to build qualified segments. Rather than targeting &quot;fitness,&quot; combine &quot;meal prep,&quot; &quot;time management,&quot; and &quot;health supplements&quot; to find their intersection.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Beauty Products: skincare routines + anti-aging + premium beauty brands",
                  "Snack Foods: healthy eating + busy lifestyle + specific dietary preferences",
                  "Beverages: energy + productivity + specific activities or sports",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Lookalike Audiences That Actually Work</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Don&apos;t build lookalikes from website visitors — they demonstrated interest, not purchase behavior. Build from your highest-value customer segments: repeat purchasers, above-average spenders, or LTV-qualified customers. These seed audiences produce significantly better-performing lookalikes.
              </p>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e54730dd0-1.png"
                  alt="CPG seasonal campaign strategy on social media"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Budget Distribution and Seasonal Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Allocate budgets as follows:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "60% to proven winners — campaigns hitting target ROAS",
                  "30% for scaling successful campaigns to new audiences",
                  "10% for completely novel approaches and creative experiments",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">Align seasonal campaigns with retail calendars. Category-specific patterns to plan around:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Health and wellness products: peak January, September, and pre-summer",
                  "Food and beverages: holidays, weather shifts, and cultural events",
                  "Beauty products: fashion seasons and special occasion calendars",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  We&apos;ve run Facebook and Instagram campaigns for CPG brands including Sun-Bird Seasonings, Williams Foods, and Sweet Sensi — generating hundreds of thousands of consumer entries and significant revenue growth through data-driven creative and targeting.
                </p>
                <IconButton href="/work" icon="arrow">See Our CPG Work</IconButton>
              </div>

            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-6 mt-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-section-offwhite rounded-xl p-6 border border-gray-100">
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
              Ready to Build CPG Campaigns That Actually Convert?
            </h2>
            <p className="text-gray-400 mb-8">
              Beast builds data-driven Facebook and Instagram campaigns for CPG brands — creative that earns attention and targeting that finds buyers.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
