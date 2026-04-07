"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const shoes = [
  { src: "/assets/williams-allstars-shoe.gif", alt: "Spicy Wings shoe" },
  { src: "/assets/williams-allstars-taco.gif", alt: "Taco shoe" },
  { src: "/assets/williams-allstars-sloppyjoe.gif", alt: "Sloppy Joe shoe" },
  { src: "/assets/williams-allstars-chili.gif", alt: "Chili shoe" },
];

const LOOP_DURATION = 2000; // ms per GIF loop
const FADE_DURATION = 300;  // ms for crossfade

export default function ShoeCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setFading(true);
      fadeRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % shoes.length);
        setFading(false);
      }, FADE_DURATION);
    }, LOOP_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeRef.current) clearTimeout(fadeRef.current);
    };
  }, [current]);

  return (
    <div className="w-72 lg:w-96 xl:w-[440px]">
      <Image
        key={shoes[current].src}
        src={shoes[current].src}
        alt={shoes[current].alt}
        width={440}
        height={440}
        unoptimized
        className="w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      />
    </div>
  );
}
