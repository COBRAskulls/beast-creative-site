"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  dark?: boolean;
  submitLabel?: string;
}

export default function ContactForm({
  dark = true,
  submitLabel = "Send My Message →",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or text us at (210) 332-0567.");
    }
  };

  const inputClass = dark ? "form-input" : "form-input-light";

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <div className="w-16 h-16 rounded-full bg-beast-pink/15 border border-beast-pink/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-beast-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`font-display text-2xl font-bold ${dark ? "text-white" : "text-beast-black"}`}>
          Message Sent!
        </h3>
        <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
          We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name *"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address *"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
        />
        <input
          {...register("company")}
          type="text"
          placeholder="Company / Brand Name"
          className={inputClass}
        />
      </div>
      <div>
        <select {...register("service")} className={inputClass}>
          <option value="">What are you most interested in? *</option>
          <option>CPG Marketing &amp; Campaigns</option>
          <option>SEO + Answer Engine Optimization</option>
          <option>Paid Social Media Advertising</option>
          <option>AI Content Production</option>
          <option>Branding &amp; Identity</option>
          <option>Web Design &amp; Development</option>
          <option>Not sure — let&apos;s talk</option>
        </select>
        {errors.service && (
          <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your brand and goals..."
          className={inputClass}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </button>
      <p className={`text-xs text-center ${dark ? "text-gray-600" : "text-gray-400"}`}>
        No spam. No commitments. We&apos;ll respond within 1 business day.
      </p>
    </form>
  );
}
