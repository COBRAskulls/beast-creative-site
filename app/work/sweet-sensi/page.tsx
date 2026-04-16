import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Sweet Sensi CBD E-Commerce | 500%+ MRR Growth | Beast Creative Agency",
  description:
    "Beast Creative Agency grew Sweet Sensi's monthly recurring revenue by over 500% through a precision SEO and social media strategy in the highly regulated CBD industry — without relying on traditional paid advertising.",
};

export default function SweetSensiPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="/assets/sweet-sensi-hero.mp4"
        />
        <div className="absolute inset-0 bg-beast-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["SEO", "Social Media Marketing", "E-Commerce", "CBD Industry", "Content Strategy"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-beast-yellow mb-3">Case Study — Sweet Sensi · 2023–2024</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              500% MRR Growth.{" "}
              <span className="text-beast-pink">In the Industry That Bans Most Ads.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              CBD brands can&apos;t run Google or Facebook ads. So Beast built an organic engine instead — and grew Sweet Sensi&apos;s monthly recurring revenue by over 500%.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="e-commerce revenue" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={9.5} suffix="%" decimals={1} label="Email Click Rate" sublabel="vs 0.82% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={2} label="Channels Combined" sublabel="SEO + Social as one system" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0} label="Paid Ad Dependency" sublabel="built to work without them" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Grow Sales in an Industry Where Most Marketing Roads Are Closed.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sweet Sensi came to Beast with a real problem — one that most CBD brands face and most agencies don&apos;t know how to solve. Their products were good. Their brand was compelling. But the CBD industry operates under some of the most restrictive advertising conditions in digital marketing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Google won&apos;t run CBD ads. Facebook and Instagram ban most direct CBD product promotion. Traditional paid acquisition channels — the backbone of e-commerce growth for almost every other product category — were largely off the table.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Real Opportunity</p>
                  <p className="text-gray-600 text-sm leading-relaxed">The CBD market is one of the fastest-growing wellness categories in the US — but the brands that win aren&apos;t the ones with the biggest ad budgets. They&apos;re the ones that show up where consumers are looking, build genuine community, and earn trust in a category where consumers are understandably cautious. Beast had to build a marketing engine that worked without the most common tools. That constraint produced a strategy more durable, more cost-efficient, and more compounding than a standard paid approach would have been.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Strategy</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">When You Can&apos;t Buy Attention, You Have to Earn It.</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "The Diagnosis", detail: "Beast started with a full audit of Sweet Sensi's digital presence: website technical health, content depth, keyword positioning, social media performance, and conversion funnel from traffic to purchase. The audit revealed the pattern Beast sees across most small e-commerce brands: significant organic search traffic being left on the table, social media presence without a clear content strategy, no tested messaging framework, and two channels that could work — SEO and organic social — being used without coordination." },
                    { step: "2", label: "The SEO Foundation", detail: "Beast built Sweet Sensi's SEO strategy around one core insight: CBD consumers are searchers, not browsers. When someone wants to try CBD for sleep, anxiety, pain, or wellness, they search. They research. They read. Beast delivered: technical optimization (speed, mobile, structured data), a keyword strategy around high-purchase-intent queries, content development building trust and depth, and domain authority signals that told search engines Sweet Sensi was legitimate — not a fly-by-night operation in a category full of low-quality players." },
                    { step: "3", label: "The Social Media Strategy", detail: "Social media for a CBD brand requires a completely different playbook. Direct product promotion is restricted on most platforms. Beast developed a content strategy built around wellness content that genuinely served Sweet Sensi's audience — sleep, stress, recovery — without hitting CBD advertising policy tripwires. Brand storytelling that built the trust CBD consumers need before they buy. User-generated content amplification within platform guidelines. Community building that converts, not just vanity follower counts." },
                    { step: "4", label: "The A/B Testing Engine", detail: "Beast ran continuous A/B tests across both channels — identifying the combinations of message, creative, and audience that drove actual purchases rather than just traffic. Which SEO content drove the highest purchase-intent traffic. Which social content formats drove website clicks. Which product page variations converted best. Which email follow-up sequences turned site visitors into buyers. This rigorous, iterative approach is what separated Beast's results from what most agencies deliver." },
                    { step: "5", label: "The Compounding Effect", detail: "The most important discovery was what Beast came to call the SEO + Social combo effect. SEO content that ranks and drives traffic also gets shared on social. Social content builds brand awareness that increases branded search volume, which improves SEO signals. Email capture from SEO-driven traffic gets nurtured through social retargeting. Brand trust built through social content increases the conversion rate of organic search visitors. Each channel amplified the other. The longer the system ran, the more efficient it got." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                      <div>
                        <p className="font-display font-bold text-beast-black mb-1">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Over 500% MRR Growth. In the Industry That Said It Couldn&apos;t Be Done With Ads.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-beast-black">
                        <th className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "E-Commerce MRR Growth", result: "+500%+", benchmark: "—" },
                        { metric: "Email Click Rate", result: "9.5%", benchmark: "11.6x vs 0.82% avg" },
                        { metric: "Strategy", result: "SEO + Social", benchmark: "dual-channel compounding" },
                        { metric: "Paid Ad Dependency", result: "0%", benchmark: "built around organic" },
                      ].map((row, i) => (
                        <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                          <td className="px-4 py-3 text-gray-700 font-medium">{row.metric}</td>
                          <td className="px-4 py-3 text-right font-display font-bold text-beast-black">{row.result}</td>
                          <td className="px-4 py-3 text-right text-beast-pink text-xs font-semibold">{row.benchmark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#111111] rounded-xl p-5 mb-6">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-2">The Durability Advantage</p>
                  <p className="text-gray-300 text-sm leading-relaxed">Paid advertising stops working the moment you stop paying. A well-executed SEO strategy keeps generating organic traffic and revenue for years after the initial investment. Sweet Sensi&apos;s content rankings, domain authority, and social community are assets that continue to compound — making each future dollar of marketing investment more efficient than the last. Beast built Sweet Sensi an engine, not a campaign. That&apos;s the difference.</p>
                </div>

                <blockquote className="border-l-4 border-beast-pink pl-6">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;Beast improved our monthly recurring revenue — it jumped by 566%, thanks to their SEO and social media strategy. They didn&apos;t just drive traffic — they brought the right people to us consistently. It&apos;s the most impactful marketing investment we&apos;ve made.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— Sweet Sensi</footer>
                </blockquote>
              </AnimatedSection>

            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Sweet Sensi" },
                    { label: "Industry", value: "CBD / Wellness / E-Commerce" },
                    { label: "Years", value: "2023–2024" },
                    { label: "Challenge", value: "Growth without paid ads (CBD restrictions)" },
                    { label: "Services", value: "SEO, Technical SEO, Content, Social Media, A/B Testing, CRO" },
                    { label: "Result", value: "500%+ MRR growth" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0 gap-3">
                      <span className="text-sm text-white shrink-0">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-[#111111] rounded-2xl p-6 border border-beast-pink/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Channel Performance</h3>
                  {[
                    { metric: "MRR Growth", beast: "566%", industry: "baseline", lift: "5.66x" },
                    { metric: "Email CTR", beast: "9.5%", industry: "0.82%", lift: "11.6x" },
                    { metric: "Paid Ad Spend", beast: "$0", industry: "standard", lift: "∞ ROAS" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-white uppercase tracking-widest">{row.metric}</span>
                        <span className="text-xs font-bold text-beast-pink">{row.lift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-beast-yellow text-lg">{row.beast}</span>
                        <span className="text-xs text-white/70 self-end pb-0.5">{row.industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["coinline", "sun-bird", "williams-bts"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build Revenue That Doesn&apos;t Stop When the Budget Does?</h2>
            <p className="text-gray-400 mb-8">Whether you&apos;re in a restricted industry or just tired of paying for traffic you don&apos;t own — Beast builds marketing assets that compound over time.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
