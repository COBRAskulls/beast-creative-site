"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[3px] z-[200] bg-beast-pink pointer-events-none"
      style={{ width: `${pct}%`, transition: "width 0.08s linear" }}
    />
  );
}
