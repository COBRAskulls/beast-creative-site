"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  sublabel,
}: StatCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6">
      <div className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-beast-green tracking-tighter leading-none">
        {prefix}
        {inView ? (
          <CountUp
            end={value}
            duration={2}
            separator=","
            decimals={decimals}
            suffix={suffix}
          />
        ) : (
          <span>
            {prefix}0{suffix}
          </span>
        )}
      </div>
      <div className="font-body text-xs font-semibold tracking-widest uppercase text-gray-400 mt-2">
        {label}
      </div>
      {sublabel && (
        <div className="font-body text-xs text-gray-600 mt-1">{sublabel}</div>
      )}
    </div>
  );
}
