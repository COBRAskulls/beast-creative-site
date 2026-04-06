"use client";

import { useState } from "react";

const services = [
  "CPG Marketing",
  "Paid Media",
  "SEO + AEO",
  "AI Content Production",
  "Branding & Identity",
  "Web Design & CRO",
  "Social Media",
  "Email Marketing",
  "Other",
];

interface Props {
  selected: string[];
  onClose: () => void;
}

export default function GetStartedModal({ selected, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: selected }),
      });
      setSubmitted(true);
    } catch {
      // fail silently — still show success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-beast-pink/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-beast-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-beast-black mb-2">You&apos;re on our radar.</h3>
              <p className="text-gray-500">We&apos;ll reach out within one business day.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-beast-black mb-2">
                  Let&apos;s Talk About Better Results.
                </h2>
                <p className="text-gray-500 text-sm">
                  Tell us about your brand and we&apos;ll reach out within one business day.
                </p>
                {selected.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {selected.map((s) => (
                      <span key={s} className="text-xs font-semibold px-3 py-1 rounded-full bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    className="form-input-light"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    type="email"
                    className="form-input-light"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="form-input-light"
                    placeholder="Company / Brand"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                  <input
                    type="tel"
                    className="form-input-light"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <select
                  className="form-input-light"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Monthly Marketing Budget</option>
                  <option>Under $2,500</option>
                  <option>$2,500 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                </select>
                <textarea
                  className="form-input-light resize-none"
                  rows={3}
                  placeholder="Tell us about your brand and goals (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  {loading ? "Sending…" : "Book a Strategy Call →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
