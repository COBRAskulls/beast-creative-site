"use client";

import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";
import CountUp from "react-countup";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
  valueClassName?: string;
  labelClassName?: string;
  sublabelClassName?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  sublabel,
  valueClassName = "text-beast-yellow",
  labelClassName = "text-gray-400",
  sublabelClassName = "text-gray-600",
}: StatCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6">
      <div className={`font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-none ${valueClassName}`}>
        {prefix}
        {inView && !prefersReducedMotion ? (
          <CountUp
            end={value}
            duration={2}
            separator=","
            decimals={decimals}
            suffix={suffix}
          />
        ) : (
          <span>{prefix}{inView ? value.toLocaleString() : "0"}{suffix}</span>
        )}
      </div>
      <div className={`font-body text-xs font-semibold tracking-widest uppercase mt-2 ${labelClassName}`}>
        {label}
      </div>
      {sublabel && (
        <div className={`font-body text-xs mt-1 ${sublabelClassName}`}>{sublabel}</div>
      )}
    </div>
  );
}
