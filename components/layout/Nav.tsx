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
      <div className="fixed top-4 left-0 right-0 z-50 hidden lg:flex justify-center pointer-events-none">
        <nav
          className="pointer-events-auto relative flex items-center h-14 px-3 gap-1 w-full max-w-7xl"
          style={{
            borderRadius: "999px",
            background: "rgba(12, 12, 12, 0.28)",
            backdropFilter: "blur(48px) saturate(220%) brightness(108%)",
            WebkitBackdropFilter: "blur(48px) saturate(220%) brightness(108%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)",
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
                <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8" onClick={() => setWorkOpen(!workOpen)}>
                  Work
                  <span className={`nav-chevron${workOpen ? " open" : ""}`}><span /></span>
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
                <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/8" onClick={() => setServicesOpen(!servicesOpen)}>
                  Services
                  <span className={`nav-chevron${servicesOpen ? " open" : ""}`}><span /></span>
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

            <Link href="/contact" className="btn-primary shrink-0 ml-1 !py-2.5 !px-5 !text-[10px] !tracking-[2px]">
              Free Strategy Call
            </Link>
        </nav>
      </div>

      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 h-14" style={{ background: "rgba(12,12,12,0.35)", backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", borderBottom: "1px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)" }}>
        <Link href="/" onClick={(e) => { if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
          <Image src="/assets/beast-logo.svg" alt="Beast Creative Agency" width={90} height={30} className="h-6 w-auto" />
        </Link>
        <button
          className={`mob-menu-btn p-0${mobileOpen ? " mob-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="mob-bars-clip">
            <span className="mob-bar-top" />
            <span className="mob-bar-mid" />
            <span className="mob-bar-bot" />
          </span>
          <span className="mob-menu-text">CLOSE</span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-beast-black flex flex-col transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-1 overflow-y-auto px-8 pt-20 pb-8">
          <nav className="space-y-1">

            {/* Work accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full font-display text-4xl font-bold text-white py-2"
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
                <span className={`nav-chevron scale-150 mr-1 transition-transform duration-300${workOpen ? " open" : ""}`}><span /></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${workOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-2 pb-3 space-y-0.5 border-l-2 border-white/10 ml-1 mt-1">
                  <Link href="/work" className="block text-sm font-semibold text-gray-400 hover:text-white py-1.5 px-3 transition-colors">
                    All Case Studies
                  </Link>
                  {caseStudies.map((cs) => (
                    <Link key={cs.href} href={cs.href} className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{cs.name}</span>
                      <span className="text-xs text-beast-yellow font-bold ml-3">{cs.stat}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full font-display text-4xl font-bold text-white py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span className={`nav-chevron scale-150 mr-1 transition-transform duration-300${servicesOpen ? " open" : ""}`}><span /></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-2 pb-3 space-y-0.5 border-l-2 border-white/10 ml-1 mt-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{s.name}</span>
                      {s.badge && <span className="text-xs bg-beast-pink/20 text-beast-pink border border-beast-pink/25 px-2 py-0.5 rounded-full font-semibold">{s.badge}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Plain links */}
            {[{ name: "CPG", href: "/cpg" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }].map((item) => (
              <Link key={item.href} href={item.href} className="block font-display text-4xl font-bold text-white hover:text-beast-pink transition-colors py-2">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-4">
            <Link href="/contact" className="btn-yellow w-full justify-center">
              Get My Free Strategy Call
            </Link>
            <a href="sms:+12103320567" className="block text-center text-sm text-gray-500 hover:text-beast-pink transition-colors">(210) 332-0567 — text or call</a>
          </div>
        </div>
      </div>
    </>
  );
}
