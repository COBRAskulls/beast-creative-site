import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Beast Creative Agency | Free Strategy Call",
  description:
    "Book a free 15-minute strategy call or send a message. No pitch deck, no commitments — just an honest conversation. Based in San Antonio, TX.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Let&apos;s Talk</p>
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white tracking-normal mb-6">
              Start the Conversation.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl mx-auto">
              Book a free 15-minute strategy call or send us a message. No pitch deck. No commitments. Just an honest conversation about what Beast can do for your brand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-beast-black py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Form */}
            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </AnimatedSection>

            {/* Right: Direct contact + booking */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-6">Book a Strategy Call</h2>
                  <p className="text-gray-400 mb-6">
                    Prefer to talk directly? Book a free 15-minute call and we&apos;ll come prepared with an honest assessment of what we can do for your brand.
                  </p>
                  <a
                    href="https://calendar.app.google/9q1mcYgEdXNyjK8G6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex text-base px-8 py-4"
                  >
                    Book a Free 15-Minute Call →
                  </a>
                </div>

                <div className="border-t border-[#2E2E2E] pt-8 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Phone / SMS</p>
                    <a
                      href="sms:+12103320567"
                      className="text-white hover:text-beast-pink transition-colors font-medium text-lg"
                    >
                      (210) 332-0567
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Text or call — we respond fast</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Location</p>
                    <p className="text-white font-medium">San Antonio, TX</p>
                    <p className="text-gray-500 text-sm mt-1">Serving clients nationally</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Response Time</p>
                    <p className="text-white font-medium">Within 1 business day</p>
                    <p className="text-gray-500 text-sm mt-1">For all inquiries and form submissions</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#2E2E2E]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">Why Talk to Beast</p>
                  <ul className="space-y-3">
                    {[
                      "7.03% CTR — vs 0.89% industry average",
                      "36,581 consumer emails on a $6,000 budget",
                      "500%+ MRR growth for e-commerce CPG clients",
                      "No pitch deck — just honest numbers",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="text-beast-pink font-bold shrink-0">✓</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
