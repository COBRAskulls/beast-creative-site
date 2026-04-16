"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function SweetSensiHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text items stagger up
      tl.from(".hero-text-item", {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.13,
      });

      // Clip-path wipes open diagonally (right edge → full diagonal)
      tl.from(
        ".hero-video-wrapper",
        {
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 88% 100%)",
          duration: 1.1,
          ease: "power3.inOut",
        },
        "-=0.5"
      );

      // Video scales down from slightly zoomed in
      tl.from(
        ".hero-video-inner",
        {
          scale: 1.08,
          opacity: 0,
          duration: 1.1,
          ease: "power3.inOut",
        },
        "<"
      );

      // Mobile video fades up
      tl.from(
        ".hero-video-mobile",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
        },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-beast-black min-h-[560px] lg:min-h-[680px] overflow-hidden"
    >
      {/* Right half: diagonal clip-path video */}
      <div
        className="hero-video-wrapper hidden lg:block absolute right-0 top-0 bottom-0 w-[58%]"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="hero-video-inner w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/sweet-sensi-hero.mp4"
          />
        </div>
      </div>

      {/* Left: text */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="lg:w-1/2 lg:pr-16">
          <div className="hero-text-item flex flex-wrap gap-2 mb-4">
            {[
              "SEO",
              "Social Media Marketing",
              "E-Commerce",
              "CBD Industry",
              "Content Strategy",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="hero-text-item section-eyebrow text-beast-yellow mb-3">
            Case Study — Sweet Sensi · 2023–2024
          </p>
          <h1 className="hero-text-item text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
            500% MRR Growth.{" "}
            <span className="text-beast-pink">
              In the Industry That Bans Most Ads.
            </span>
          </h1>
          <p className="hero-text-item text-body-lead text-gray-300">
            CBD brands can&apos;t run Google or Facebook ads. So Beast built an
            organic engine instead — and grew Sweet Sensi&apos;s monthly
            recurring revenue by over 500%.
          </p>
        </div>
      </div>

      {/* Mobile: video below text */}
      <div className="hero-video-mobile lg:hidden w-full aspect-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/assets/sweet-sensi-hero.mp4"
        />
      </div>
    </section>
  );
}
