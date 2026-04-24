"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AnimatedCheckmark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <motion.svg
      className={`${className} text-beast-pink`}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        stroke="currentColor"
        d="M5 13l4 4L19 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.2, ease }}
      />
    </motion.svg>
  );
}
