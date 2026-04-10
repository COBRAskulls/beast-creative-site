"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

interface TiltCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function TiltCard({ src, alt, width, height }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.matchMedia("(max-width: 1023px)").matches;

    const card = cardRef.current;
    if (!card) return;

    // Desktop: mouse move tilt
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile.current) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 18}deg) rotateX(${-y * 12}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      if (isMobile.current) return;
      card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    };

    // Mobile: scroll-based tilt
    const handleScroll = () => {
      if (!isMobile.current) return;
      const rect = card.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress: 0 when bottom of card enters viewport, 1 when top leaves
      const progress = 1 - (rect.bottom / (windowH + rect.height));
      const clamped = Math.max(-0.5, Math.min(0.5, progress - 0.25));
      const tiltX = clamped * 20;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) scale(${1 + Math.abs(clamped) * 0.03})`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full rounded-2xl overflow-hidden cursor-pointer"
      style={{
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto block"
      />
    </div>
  );
}
