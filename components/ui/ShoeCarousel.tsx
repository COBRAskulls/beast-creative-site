"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const shoes = [
  { src: "/assets/williams-allstars-shoe.gif", alt: "Spicy Wings shoe", duration: 2000 },
  { src: "/assets/williams-allstars-taco.gif", alt: "Taco shoe", duration: 2000 },
  { src: "/assets/williams-allstars-sloppyjoe.gif", alt: "Sloppy Joe shoe", duration: 2000 },
  { src: "/assets/williams-allstars-chili.gif", alt: "Chili shoe", duration: 2000 },
];

export default function ShoeCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Fade out
      setVisible(false);
      // After fade, switch shoe and fade in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % shoes.length);
        setVisible(true);
      }, 300);
    }, shoes[current].duration);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-72 lg:w-96 xl:w-[440px] aspect-square">
      {shoes.map((shoe, i) => (
        <Image
          key={shoe.src}
          src={shoe.src}
          alt={shoe.alt}
          fill
          unoptimized
          className="object-contain transition-opacity duration-300"
          style={{ opacity: i === current && visible ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
