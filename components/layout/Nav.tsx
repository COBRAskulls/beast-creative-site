"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "CPG Marketing", href: "/services/cpg-marketing", badge: "Flagship" },
  { name: "SEO + AEO", href: "/services/seo-aeo" },
  { name: "Paid Media", href: "/services/paid-media" },
  { name: "AI Content Production", href: "/services/content-production" },
  { name: "Branding & Identity", href: "/services/branding" },
  { name: "Web Design & CRO", href: "/services/web-design" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-beast-black/95 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="font-display font-extrabold text-xl tracking-normal">
              <span className="text-beast-green">BEAST</span>
              <span className="text-white"> CREATIVE</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link href="/work" className="nav-link">Work</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl shadow-2xl overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {s.name}
                      {s.badge && (
                        <span className="text-xs bg-beast-pink/15 text-beast-pink border border-beast-pink/20 px-2 py-0.5 rounded-full font-semibold">
                          {s.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/cpg" className="nav-link">CPG</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">About</Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className="btn-primary hidden lg:inline-flex text-sm">
            Free Strategy Call →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-beast-black flex flex-col transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-8">
          <nav className="space-y-2">
            {[
              { name: "Work", href: "/work" },
              { name: "Services", href: "/services" },
              { name: "CPG", href: "/cpg" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-display text-4xl font-bold text-white hover:text-beast-pink transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-12 space-y-4">
            <Link href="/contact" className="btn-primary text-base w-full text-center justify-center">
              Get My Free Strategy Call →
            </Link>
            <a
              href="sms:+12103320567"
              className="block text-center text-sm text-gray-500 hover:text-beast-pink transition-colors"
            >
              (210) 332-0567 — text or call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
