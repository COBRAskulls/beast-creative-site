"use client";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
  bg?: string;
  textColor?: string;
  separator?: string;
  rotate?: boolean;
}

export default function Marquee({
  items,
  className = "",
  bg = "bg-beast-pink",
  textColor = "text-beast-black",
  separator = "·",
  rotate = false,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`${bg} py-3 overflow-hidden ${rotate ? "-rotate-1 scale-105" : ""}`}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-display font-bold text-xs tracking-widest uppercase whitespace-nowrap ${textColor} ${className}`}
          >
            {item}&nbsp;&nbsp;{separator}&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
