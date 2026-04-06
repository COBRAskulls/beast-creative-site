export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "Beast Creative Agency",
    url: "https://beastcreativeagency.com",
    logo: "https://beastcreativeagency.com/images/beast-logo-green.svg",
    description:
      "Beast Creative Agency is San Antonio's premier AI-powered digital marketing agency specializing in CPG marketing, SEO, paid media, and branding.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "+12103320567",
    sameAs: [
      "https://www.facebook.com/beastcreativeagency",
      "https://www.instagram.com/beastcreativeagency",
      "https://www.linkedin.com/company/beast-creative-agency",
    ],
    areaServed: ["San Antonio, TX", "Texas", "United States"],
    serviceType: [
      "CPG Marketing",
      "Digital Marketing",
      "SEO",
      "Paid Media",
      "Branding",
      "Web Design",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Beast Creative Agency",
    url: "https://beastcreativeagency.com",
    telephone: "+12103320567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.4241,
      longitude: -98.4936,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "Beast Creative Agency",
      url: "https://beastcreativeagency.com",
    },
    areaServed: "United States",
  };
}
