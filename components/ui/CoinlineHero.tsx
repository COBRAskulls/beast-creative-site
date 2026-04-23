"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WORDS = ["ARCADE", "PRESS START", "PIXEL"];
const WORD_BASE_Z = [-1500, -3000, -4500];
const CAM_SPEED = 2.5;
const PROXY_PX = 2200;
const STAR_LOOP = 7000;

export default function CoinlineHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const world = worldRef.current;
    const vp = viewportRef.current;
    if (!container || !hero || !world || !vp) return;
    const heroEl: HTMLDivElement = hero;
    const worldEl: HTMLDivElement = world;
    const vpEl: HTMLDivElement = vp;

    // Track scroll to pin/unpin hero
    // Fixed while scrolling through proxy budget; absolute at end so it scrolls away
    function updatePin() {
      const scrollY = window.scrollY;
      if (scrollY < PROXY_PX) {
        heroEl.style.position = "fixed";
        heroEl.style.top = "0";
      } else {
        heroEl.style.position = "absolute";
        heroEl.style.top = `${PROXY_PX}px`;
      }
    }
    updatePin();
    window.addEventListener("scroll", updatePin, { passive: true });

    type Item = {
      el: HTMLElement;
      x: number;
      y: number;
      baseZ: number;
      type: "text" | "star";
    };

    const items: Item[] = [];

    WORDS.forEach((word, i) => {
      const wrapper = document.createElement("div");
      wrapper.className = "hs-item";

      const txt = document.createElement("div");
      txt.className = "hs-big-text";
      txt.innerText = word;

      wrapper.appendChild(txt);
      worldEl.appendChild(wrapper);
      items.push({ el: wrapper, x: 0, y: 0, baseZ: WORD_BASE_Z[i], type: "text" });
    });

    for (let i = 0; i < 130; i++) {
      const el = document.createElement("div");
      el.className = "hs-star";
      worldEl.appendChild(el);
      items.push({
        el,
        x: (Math.random() - 0.5) * 3200,
        y: (Math.random() - 0.5) * 1600,
        baseZ: -Math.random() * STAR_LOOP,
        type: "star",
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let lastScrollY = 0;
    let smoothVel = 0;
    let rafId: number;

    const velEl = document.getElementById("hs-vel");
    const coordEl = document.getElementById("hs-coord");

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    function tick() {
      const scrollY = window.scrollY;
      const rawVel = scrollY - lastScrollY;
      lastScrollY = scrollY;
      smoothVel += (rawVel - smoothVel) * 0.12;

      const cameraZ = scrollY * CAM_SPEED;

      const fov = 1000 - Math.min(Math.abs(smoothVel) * 10, 600);
      vpEl.style.perspective = `${fov}px`;

      worldEl.style.transform = `
        rotateX(${mouseY * 5 - smoothVel * 0.5}deg)
        rotateY(${mouseX * 5}deg)
      `;

      if (velEl) velEl.innerText = Math.abs(smoothVel).toFixed(2);
      if (coordEl) coordEl.innerText = String(scrollY).padStart(7, "0");

      items.forEach((item) => {
        let vizZ: number;

        if (item.type === "star") {
          const relZ = item.baseZ + cameraZ;
          vizZ = ((relZ % STAR_LOOP) + STAR_LOOP) % STAR_LOOP;
          if (vizZ > 500) vizZ -= STAR_LOOP;
        } else {
          vizZ = item.baseZ + cameraZ;
        }

        let alpha = 1;
        if (vizZ < -4000) alpha = 0;
        else if (vizZ < -2500) alpha = (vizZ + 4000) / 1500;
        if (item.type === "text" && vizZ > 80) alpha = 1 - (vizZ - 80) / 400;
        alpha = Math.max(0, Math.min(1, alpha));
        item.el.style.opacity = String(alpha);

        if (item.type === "star") {
          const stretch = Math.max(1, Math.min(1 + Math.abs(smoothVel) * 0.12, 8));
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px) scale3d(1,1,${stretch})`;
        } else {
          const txtEl = item.el.firstChild as HTMLElement;
          if (txtEl) {
            if (Math.abs(smoothVel) > 2) {
              const o = smoothVel * 2;
              txtEl.style.textShadow = `${o}px 0 #ff003c, ${-o}px 0 #00f3ff`;
            } else {
              txtEl.style.textShadow = "none";
            }
          }
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px)`;
        }
      });

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updatePin);
      window.removeEventListener("mousemove", onMouseMove);
      while (worldEl.firstChild) worldEl.removeChild(worldEl.firstChild);
    };
  }, []);

  return (
    <>
      <style>{`
        .hs-item {
          position: absolute;
          left: 0; top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          transform-origin: center center;
        }
        .hs-big-text {
          font-size: clamp(56px, 14vw, 210px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.18);
          text-transform: uppercase;
          white-space: nowrap;
          transform: translate(-50%, -50%);
          pointer-events: none;
          letter-spacing: -0.04em;
          mix-blend-mode: overlay;
        }
        .hs-star {
          position: absolute;
          width: 2px; height: 2px;
          background: white;
          transform: translate(-50%, -50%);
        }
        .hs-scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%
          );
          background-size: 100% 4px;
        }
        .hs-hud-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 0 1rem;
          position: relative;
        }
        .hs-hud-line::after {
          content: '';
          position: absolute;
          right: 0; top: -2px;
          width: 5px; height: 5px;
          background: #ff003c;
        }
      `}</style>

      {/* Scroll budget container — creates the proxy scroll space */}
      <div
        ref={containerRef}
        style={{ height: `calc(100vh + ${PROXY_PX}px)`, position: "relative" }}
      >
        {/* Hero — fixed to viewport while scrolling through budget, then absolute so it scrolls away */}
        <div
          ref={heroRef}
          className="relative overflow-hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#030303",
            zIndex: 5,
          }}
        >
          {/* Scanlines */}
          <div
            className="hs-scanlines absolute inset-0 pointer-events-none"
            style={{ zIndex: 10 }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, transparent 40%, #000 120%)",
              zIndex: 11,
            }}
          />

          {/* Noise */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 12,
              opacity: 0.07,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* HUD */}
          <div
            className="absolute inset-8 pointer-events-none flex flex-col justify-between"
            style={{
              zIndex: 20,
              fontFamily: "monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <div className="flex justify-between items-center">
              <span>SYS.READY</span>
              <div className="hs-hud-line" />
              <span>
                SCROLL VEL:{" "}
                <strong id="hs-vel" style={{ color: "#00f3ff" }}>
                  0.00
                </strong>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>
                COORD:{" "}
                <strong id="hs-coord" style={{ color: "#00f3ff" }}>
                  0000000
                </strong>
              </span>
              <div className="hs-hud-line" />
              <span>COINLINE BARCADE · EST. 2022</span>
            </div>
          </div>

          {/* 3D viewport */}
          <div
            ref={viewportRef}
            className="absolute inset-0 overflow-hidden"
            style={{ perspective: "1000px", zIndex: 1 }}
          >
            <div
              ref={worldRef}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>

          {/* Hero text — sits above the 3D scene */}
          <div
            className="absolute inset-0 flex flex-col justify-end"
            style={{ zIndex: 30 }}
          >
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "60%",
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              }}
            />
            <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-20 pb-20 lg:pb-28">
              <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Branding", "Naming", "Identity Design", "Digital", "Apparel"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="section-eyebrow text-beast-yellow mb-3">
                  Case Study — Coinline Barcade · 2022
                </p>
                <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
                  From a Concept to a{" "}
                  <span className="text-beast-pink">Complete Brand Universe.</span>
                </h1>
                <p className="text-body-lead text-gray-300 max-w-2xl">
                  Named, designed, and launched from scratch — Beast built the full brand
                  identity for Coinline Barcade, a retro-modern arcade concept built to own
                  every surface it touches.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
