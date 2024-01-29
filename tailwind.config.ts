import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1500px",
        },
      },
      colors: {
        primary: "#252729",
        secondary: "#FF8C76",
        whtie: "#FFFFFF",
        gray_lite: "#62677C",
        black_greay: "#252729",
        white_cold: "#E7F5FE",
      },
      keyframes: {
        carosale: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carosale: "carosale 22s linear infinite",
      },
      fontFamily: {
        Rubik: [`var(--font-rubik)`],
      },
    },
  },
  plugins: [],
};
export default config;
