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

// ── Organic liquid-glass paths ──────────────────────────────────────────────
// All paths share the same cubic-bezier command count so CSS can morph between
// them. W=780, H=56. Lobes shift based on the active section's position.
const PATHS: Record<string, string> = {
  // Symmetric pill — home
  home: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 140 56, 240 60, 390 60
    C 540 60, 640 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 640 0, 540 -4, 390 -4
    C 240 -4, 140 0, 28 0 Z
  `,
  // Lobe expands around Work (≈ 185–240px region) — top dips, bottom lifts
  work: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 120 56, 185 68, 215 68
    C 245 68, 310 56, 490 56
    C 620 56, 680 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 680 0, 620 0, 490 0
    C 310 0, 245 -12, 215 -12
    C 185 -12, 120 0, 28 0 Z
  `,
  // Lobe around Services (≈ 248–330px)
  services: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 130 56, 230 56, 285 68
    C 325 76, 360 68, 490 56
    C 620 56, 680 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 680 0, 620 0, 490 0
    C 360 -12, 325 -20, 285 -12
    C 230 0, 130 0, 28 0 Z
  `,
  // Lobe around CPG (≈ 333–378px)
  cpg: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 150 56, 285 56, 355 66
    C 385 72, 415 66, 490 56
    C 620 56, 680 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 680 0, 620 0, 490 0
    C 415 -10, 385 -16, 355 -10
    C 285 0, 150 0, 28 0 Z
  `,
  // Lobe around About (≈ 381–440px)
  about: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 160 56, 310 56, 390 66
    C 440 74, 460 66, 530 56
    C 640 56, 700 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 700 0, 640 0, 530 0
    C 460 -10, 440 -18, 390 -10
    C 310 0, 160 0, 28 0 Z
  `,
  // Lobe around Contact (≈ 439–510px)
  contact: `
    M 28 0
    C 14 0, 0 14, 0 28
    C 0 42, 14 56, 28 56
    C 190 56, 360 56, 455 66
    C 492 74, 520 66, 600 56
    C 680 56, 720 56, 752 56
    C 766 56, 780 42, 780 28
    C 780 14, 766 0, 752 0
    C 720 0, 680 0, 600 0
    C 520 -10, 492 -18, 455 -10
    C 360 0, 190 0, 28 0 Z
  `,
};

function getShape(pathname: string): string {
  if (pathname === "/")               return PATHS.home;
  if (pathname.startsWith("/work"))   return PATHS.work;
  if (pathname.startsWith("/services"))return PATHS.services;
  if (pathname.startsWith("/cpg"))    return PATHS.cpg;
  if (pathname.startsWith("/about"))  return PATHS.about;
  if (pathname.startsWith("/contact"))return PATHS.contact;
  return PATHS.home;
}

export default function Nav() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [workOpen, setWorkOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted]           = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
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
        {/* SVG liquid glass shape — sits behind nav content */}
        <div className="relative pointer-events-auto" style={{ width: 780 }}>

          {/* The glass background rendered as an SVG */}
          <svg
            viewBox="0 0 780 56"
            width="780"
            height="56"
            className="absolute top-0 left-0 w-full"
            style={{ overflow: "visible" }}
            aria-hidden
          >
            <defs>
              <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.5" />
              </filter>
            </defs>
            {/* Frosted background fill */}
            <path
              d={mounted ? getShape(pathname) : PATHS.home}
              fill="rgba(255,255,255,0.10)"
              style={{
                transition: "d 0.7s cubic-bezier(0.34,1.4,0.64,1)",
                backdropFilter: "blur(28px)",
              }}
            />
            {/* Top highlight line */}
            <path
              d={mounted ? getShape(pathname) : PATHS.home}
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
              style={{ transition: "d 0.7s cubic-bezier(0.34,1.4,0.64,1)" }}
            />
            {/* Inner shimmer spot */}
            <ellipse cx="200" cy="8" rx="120" ry="10" fill="rgba(255,255,255,0.12)" />
            {/* Iridescent tint */}
            <ellipse cx="580" cy="8" rx="80" ry="8" fill="rgba(180,200,255,0.07)" />
          </svg>

          {/* Nav content — sits on top of SVG */}
          <nav
            className="relative flex items-center h-14 px-3 gap-1"
            style={{ width: 780 }}
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

            <Link href="/contact" className="shrink-0 px-4 py-1.5 text-sm font-bold text-beast-black bg-beast-yellow rounded-full hover:bg-beast-yellow/90 transition-colors ml-1">
              Free Strategy Call
            </Link>
          </nav>
        </div>
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
