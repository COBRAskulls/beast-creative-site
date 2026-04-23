"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WORDS = ["ARCADE", "PRESS START", "PIXEL"];

export default function CoinlineHero() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const TOTAL_ITEMS = 15; // 5 full cycles of 3 words
    const Z_GAP = 1400;
    const LOOP_SIZE = TOTAL_ITEMS * Z_GAP;
    const CAM_SPEED = 0.7;

    interface Item {
      el: HTMLElement;
      x: number;
      y: number;
      baseZ: number;
      type: "text" | "star";
    }

    const items: Item[] = [];

    for (let i = 0; i < TOTAL_ITEMS; i++) {
      const el = document.createElement("div");
      el.className = "hs-item";
      const txt = document.createElement("div");
      txt.className = "hs-big-text";
      txt.innerText = WORDS[i % WORDS.length];
      el.appendChild(txt);
      world.appendChild(el);
      items.push({ el, x: 0, y: 0, baseZ: -i * Z_GAP, type: "text" });
    }

    for (let i = 0; i < 70; i++) {
      const el = document.createElement("div");
      el.className = "hs-star";
      world.appendChild(el);
      items.push({
        el,
        x: (Math.random() - 0.5) * 2800,
        y: (Math.random() - 0.5) * 1400,
        baseZ: -Math.random() * LOOP_SIZE,
        type: "star",
      });
    }

    let scrollPos = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    function tick() {
      scrollPos += CAM_SPEED;

      if (world) {
        world.style.transform = `rotateX(${mouseY * 3}deg) rotateY(${mouseX * 3}deg)`;
      }

      items.forEach((item) => {
        let relZ = item.baseZ + scrollPos;
        let vizZ = ((relZ % LOOP_SIZE) + LOOP_SIZE) % LOOP_SIZE;
        if (vizZ > 500) vizZ -= LOOP_SIZE;

        let alpha = 1;
        if (vizZ < -4000) alpha = 0;
        else if (vizZ < -2500) alpha = (vizZ + 4000) / 1500;
        if (item.type === "text" && vizZ > 80) alpha = 1 - (vizZ - 80) / 400;
        alpha = Math.max(0, alpha);

        item.el.style.opacity = String(alpha);
        item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px)`;
      });

      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      while (world.firstChild) world.removeChild(world.firstChild);
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
        }
        .hs-big-text {
          font-size: clamp(56px, 13vw, 190px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.18);
          text-transform: uppercase;
          white-space: nowrap;
          transform: translate(-50%, -50%);
          pointer-events: none;
          letter-spacing: -0.03em;
          mix-blend-mode: overlay;
        }
        .hs-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.55);
          transform: translate(-50%, -50%);
        }
      `}</style>

      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-beast-black" />

        {/* 3D scene */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ perspective: "1000px" }}
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

        {/* Vignette to blend edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.75) 100%)",
            zIndex: 2,
          }}
        />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20" style={{ zIndex: 10 }}>
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
              Named, designed, and launched from scratch — Beast built the full brand identity
              for Coinline Barcade, a retro-modern arcade concept built to own every surface it
              touches.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
