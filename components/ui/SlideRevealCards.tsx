"use client";

import { useState } from "react";

const CARDS = [
  {
    image: "/assets/coinline-ref-joystick.jpg",
    tag: "Visual Reference",
    title: "Motion at the Core",
    subtitle: "Directional energy in every stroke",
    description:
      "The arcade joystick's four-directional geometry became the structural DNA of the Coinline letterforms. Angular cuts, precise axes, and directional energy — every letter built like a cabinet built to move.",
  },
  {
    image: "/assets/coinline-ref-font.jpg",
    tag: "Typography",
    title: "Type as Geometry",
    subtitle: "Engineered letterforms",
    description:
      "Geometric typefaces showed us the direction: modular, angular letterforms that feel assembled rather than drawn. We studied what made them feel digital and purpose-built, then pushed further into something fully custom.",
  },
  {
    image: "/assets/coinline-ref-coin.jpg",
    tag: "The Name",
    title: "Currency of Play",
    subtitle: "The icon that started everything",
    description:
      "The pixel coin is the universal symbol of arcade culture. It gave us 'Coinline' and the pixel-precision construction philosophy embedded into every letterform — the O in the wordmark is literally a coin.",
  },
  {
    image: "/assets/coinline-ref-gameover.jpg",
    tag: "Aesthetic DNA",
    title: "Pixel Perfect",
    subtitle: "The arcade typographic code",
    description:
      "The glowing, blocky game-over screen defined an entire era's visual grammar. We didn't replicate it — we inherited its DNA and rebuilt it for 2022: sharper, modular, and built for every surface the brand would touch.",
  },
];

export default function SlideRevealCards() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <>
      <style>{`
        .src-card {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
          cursor: pointer;
          aspect-ratio: 3/4;
        }
        .src-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.75s cubic-bezier(0.19,1,0.22,1);
          z-index: 1;
        }
        .src-card:hover .src-image,
        .src-card.is-active .src-image {
          transform: translateY(-80px);
        }
        .src-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 140px;
          background: linear-gradient(to top, rgba(0,0,0,0.92), transparent);
          z-index: 2;
          transition: height 0.75s cubic-bezier(0.19,1,0.22,1);
        }
        .src-card:hover .src-overlay,
        .src-card.is-active .src-overlay {
          height: 100%;
        }
        .src-header {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          padding: 1.25rem;
          z-index: 3;
          transition: transform 0.75s cubic-bezier(0.19,1,0.22,1);
        }
        .src-card:hover .src-header,
        .src-card.is-active .src-header {
          transform: translateY(-80px);
        }
        .src-tag {
          display: inline-block;
          background: #ed1564;
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transform: translateY(30px);
          opacity: 0;
          transition: transform 0.75s cubic-bezier(0.19,1,0.22,1),
                      opacity 0.75s cubic-bezier(0.19,1,0.22,1);
        }
        .src-card:hover .src-tag,
        .src-card.is-active .src-tag {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.08s;
        }
        .src-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 4px;
          font-family: inherit;
        }
        .src-subtitle {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
        }
        .src-content {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          padding: 1.25rem;
          z-index: 4;
          transform: translateY(100%);
          transition: transform 0.75s cubic-bezier(0.19,1,0.22,1);
        }
        .src-card:hover .src-content,
        .src-card.is-active .src-content {
          transform: translateY(0);
        }
        .src-description {
          font-size: 0.82rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.85);
          opacity: 0;
          transform: translateY(16px);
          transition: transform 0.75s cubic-bezier(0.19,1,0.22,1),
                      opacity 0.75s cubic-bezier(0.19,1,0.22,1);
        }
        .src-card:hover .src-description,
        .src-card.is-active .src-description {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.22s;
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`src-card${active === i ? " is-active" : ""}`}
            onClick={() => toggle(i)}
          >
            <div
              className="src-image"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className="src-overlay" />

            {/* Always-visible header slides up on hover */}
            <div className="src-header">
              <div className="src-tag">{card.tag}</div>
              <div className="src-title">{card.title}</div>
              <div className="src-subtitle">{card.subtitle}</div>
            </div>

            {/* Description slides up from bottom on hover */}
            <div className="src-content">
              <p className="src-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
