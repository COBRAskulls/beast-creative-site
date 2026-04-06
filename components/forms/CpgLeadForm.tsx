"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Brand/company name required"),
  revenue: z.string().min(1, "Please select revenue range"),
  challenge: z.string().min(1, "Please select your biggest challenge"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CpgLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: "CPG Marketing" }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Text us at (210) 332-0567.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <div className="w-16 h-16 rounded-full bg-beast-green/20 border border-beast-green/40 flex items-center justify-center">
          <svg className="w-8 h-8 text-beast-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-white">We Got It!</h3>
        <p className="text-gray-400 text-sm max-w-sm">
          We&apos;ll review your submission and reach out within 1 business day with a clear picture of what we&apos;d do for your brand.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input {...register("name")} type="text" placeholder="Your Name *" className="form-input" />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("email")} type="email" placeholder="Email Address *" className="form-input" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input {...register("phone")} type="tel" placeholder="Phone Number" className="form-input" />
        <div>
          <input {...register("company")} type="text" placeholder="Brand / Company Name *" className="form-input" />
          {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
        </div>
      </div>
      <div>
        <select {...register("revenue")} className="form-input">
          <option value="">Annual Revenue Range *</option>
          <option>Under $500K</option>
          <option>$500K–$5M</option>
          <option>$5M–$20M</option>
          <option>$20M–$50M</option>
          <option>$50M+</option>
        </select>
        {errors.revenue && <p className="text-red-400 text-xs mt-1">{errors.revenue.message}</p>}
      </div>
      <div>
        <select {...register("challenge")} className="form-input">
          <option value="">Biggest Marketing Challenge *</option>
          <option>No consumer data</option>
          <option>Low ad performance</option>
          <option>Need retail-ready proof</option>
          <option>Content at scale</option>
          <option>Multi-brand SEO</option>
          <option>Other</option>
        </select>
        {errors.challenge && <p className="text-red-400 text-xs mt-1">{errors.challenge.message}</p>}
      </div>
      <textarea
        {...register("message")}
        rows={4}
        placeholder="Tell us about your brand and goals..."
        className="form-input"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-center justify-center text-base py-4 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send My Message →"}
      </button>
      <p className="text-xs text-gray-600 text-center">
        No spam. No commitments. We&apos;ll respond within 1 business day.
      </p>
    </form>
  );
}
