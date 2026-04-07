"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const caseStudies = [
  { name: "Sun-Bird Seasonings",     href: "/work/sun-bird",         stat: "36,581"  },
  { name: "Williams — BTS",          href: "/work/williams-bts",     stat: "22,043"  },
  { name: "Williams — All-Stars",    href: "/work/williams-allstars",stat: "13,660"  },
  { name: "Williams Bowl",           href: "/work/williams-bowl",    stat: "6,020"   },
  { name: "Sweet Sensi",             href: "/work/sweet-sensi",      stat: "500%+"   },
  { name: "Coinline",                href: "/work/coinline",         stat: "Branding"},
  { name: "Pioneer",                 href: "/work/pioneer",          stat: "ROAS"    },
];

const services = [
  { name: "CPG Marketing",        href: "/services/cpg-marketing",  badge: "Flagship" },
  { name: "SEO + AEO",            href: "/services/seo-aeo"                           },
  { name: "Paid Media",           href: "/services/paid-media"                        },
  { name: "AI Content Production",href: "/services/content-production"                },
  { name: "Branding & Identity",  href: "/services/branding"                          },
  { name: "Web Design & CRO",     href: "/services/web-design"                        },
];


export default function Nav() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [workOpen, setWorkOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const dropdownGlass: React.CSSProperties = {
    background: "rgba(18, 18, 18, 0.80)",
    backdropFilter: "blur(28px) saturate(180%)",
    WebkitBackdropFilter: "blur(28px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    boxShadow: "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
  };

  return (
    <>
      {/* ── Desktop floating pill ── */}
      <div className="fixed top-4 left-0 right-0 z-50 hidden lg:flex justify-center px-6 pointer-events-none">
        <nav
          className="pointer-events-auto relative flex items-center h-14 px-3 gap-1 w-full max-w-7xl"
          style={{
            borderRadius: "999px",
            background: "rgba(8, 8, 8, 0.82)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center px-3 py-1"
              onClick={(e) => {
                if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
              }}
            >
              <Image src="/assets/beast-logo.svg" alt="Beast Creative Agency" width={100} height={34} className="h-7 w-auto" />
            </Link>

            <div className="w-px h-4 bg-white/15 mx-1 shrink-0" />

            <ul className="flex items-center flex-1">
              {/* Work */}
              <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8" onClick={() => setWorkOpen(!workOpen)}>
                  Work
                  <svg className={`w-3 h-3 opacity-50 transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {workOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div style={dropdownGlass} className="overflow-hidden">
                      <Link href="/work" className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-white hover:bg-white/8 transition-colors border-b border-white/8">
                        All Case Studies <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">7</span>
                      </Link>
                      {caseStudies.map((cs) => (
                        <Link key={cs.href} href={cs.href} className="flex items-center justify-between px-5 py-2.5 hover:bg-white/8 transition-colors group">
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate pr-3">{cs.name}</span>
                          <span className="text-xs text-beast-yellow font-bold shrink-0">{cs.stat}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Services */}
              <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8" onClick={() => setServicesOpen(!servicesOpen)}>
                  Services
                  <svg className={`w-3 h-3 opacity-50 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                    <div style={dropdownGlass} className="overflow-hidden">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className="flex items-center justify-between px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/8 transition-colors">
                          {s.name}
                          {s.badge && <span className="text-xs bg-beast-pink/20 text-beast-pink border border-beast-pink/25 px-2 py-0.5 rounded-full font-semibold">{s.badge}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {["CPG", "About", "Contact"].map((name) => (
                <li key={name}>
                  <Link href={`/${name.toLowerCase()}`} className="block px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8">{name}</Link>
                </li>
              ))}
            </ul>

            <div className="w-px h-4 bg-white/15 mx-1 shrink-0" />

            <Link
              href="/contact"
              className="group relative shrink-0 ml-1 px-4 py-1.5 text-sm font-bold text-white rounded-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.28)",
                boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(0,0,0,0.25)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "box-shadow 0.3s ease, background 0.3s ease",
              }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                }}
              />
              <span className="relative">Free Strategy Call</span>
            </Link>
        </nav>
      </div>

      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 h-14 bg-beast-black/85 backdrop-blur-md">
        <Link href="/" onClick={(e) => { if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
          <Image src="/assets/beast-logo.svg" alt="Beast Creative Agency" width={90} height={30} className="h-6 w-auto" />
        </Link>
        <button className="flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-beast-black flex flex-col transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-8">
          <nav className="space-y-2">
            {[{ name: "Work", href: "/work" }, { name: "Services", href: "/services" }, { name: "CPG", href: "/cpg" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }].map((item) => (
              <Link key={item.href} href={item.href} className="block font-display text-4xl font-bold text-white hover:text-beast-pink transition-colors py-2">{item.name}</Link>
            ))}
          </nav>
          <div className="mt-12 space-y-4">
            <Link href="/contact" className="btn-primary text-base w-full text-center justify-center">Get My Free Strategy Call →</Link>
            <a href="sms:+12103320567" className="block text-center text-sm text-gray-500 hover:text-beast-pink transition-colors">(210) 332-0567 — text or call</a>
          </div>
        </div>
      </div>
    </>
  );
}
