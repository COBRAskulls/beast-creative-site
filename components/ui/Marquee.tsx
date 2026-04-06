"use client";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
  bg?: string;
  textColor?: string;
  separator?: string;
}

export default function Marquee({
  items,
  className = "",
  bg = "bg-beast-pink",
  textColor = "text-beast-black",
  separator = "·",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`${bg} py-3 overflow-hidden`}>
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
