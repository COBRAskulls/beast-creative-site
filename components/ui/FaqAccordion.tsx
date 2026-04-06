"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={faq.question}>
          <button
            className="w-full text-left flex items-center justify-between gap-4 py-5 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-display text-lg font-bold text-beast-black group-hover:text-beast-pink transition-colors">
              {faq.question}
            </span>
            <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-200 ${open === i ? "bg-beast-pink border-beast-pink rotate-45" : "group-hover:border-beast-pink"}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={open === i ? "white" : "currentColor"} strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
