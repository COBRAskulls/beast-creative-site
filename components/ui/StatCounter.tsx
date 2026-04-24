"use client";

import { useState, useEffect } from "react";
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
  const [scrambling, setScrambling] = useState(false);
  const [scrVal, setScrVal] = useState("");
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    let alive = true;
    let ticks = 0;
    const maxTicks = 14;
    setScrambling(true);

    const tick = () => {
      if (!alive) return;
      if (ticks >= maxTicks) {
        setScrambling(false);
        setCounted(true);
        return;
      }
      const rand = Math.random() * Math.max(value * 1.3, 100);
      const fmt = decimals > 0 ? rand.toFixed(decimals) : String(Math.floor(rand));
      setScrVal(
        Number(fmt).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
      ticks++;
      setTimeout(tick, 40);
    };

    tick();
    return () => { alive = false; };
  }, [inView, prefersReducedMotion, value, decimals]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6">
      <div className={`font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-none ${valueClassName}`}>
        {scrambling ? (
          <span className="opacity-50 tabular-nums">{prefix}{scrVal}{suffix}</span>
        ) : counted && !prefersReducedMotion ? (
          <span>
            {prefix}
            <CountUp end={value} duration={2} separator="," decimals={decimals} suffix={suffix} />
          </span>
        ) : (
          <span>
            {prefix}
            {inView
              ? value.toLocaleString(undefined, {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                })
              : "0"}
            {suffix}
          </span>
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
