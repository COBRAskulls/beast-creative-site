import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "beast-green": {
          DEFAULT: "#2ECC40",
          dark: "#25A535",
          light: "#4DD862",
          muted: "#1E8028",
        },
        "beast-black": "#0D0D0D",
        "beast-dark-green": "#0D1F0F",
        "beast-deep-green": "#162B1A",
      },
      fontFamily: {
        display: ["var(--font-syne)", "Arial Black", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
