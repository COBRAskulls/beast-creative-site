"use client";

import Image from "next/image";

interface TradingCardProps {
  front: string;
  back: string;
  alt: string;
  rotation: number;   // initial tilt in degrees
  floatDelay: string; // e.g. "0s", "0.4s", "0.8s"
}

export default function TradingCard({ front, back, alt, rotation, floatDelay }: TradingCardProps) {
  return (
    // Outer: handles floating animation only
    <div
      className="cursor-pointer"
      style={{
        animation: "card-float 3s ease-in-out infinite",
        animationDelay: floatDelay,
      }}
    >
      {/* Middle: handles static tilt */}
      <div style={{ transform: `rotate(${rotation}deg)` }}>
        {/* Inner group: handles 3D flip on hover */}
        <div
          className="group relative w-full"
          style={{ perspective: "1000px", aspectRatio: "2.5 / 3.5" }}
        >
          <div
            className="
              relative w-full h-full
              transition-transform duration-700 ease-in-out
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
            "
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl [backface-visibility:hidden]"
            >
              <Image
                src={front}
                alt={`${alt} — front`}
                fill
                className="object-cover"
              />
            </div>

            {/* Back face */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              <Image
                src={back}
                alt={`${alt} — back`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
