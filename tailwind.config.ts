import type { Config } from "tailwindcss";
import { COLORS } from "./src/constants/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "375px" },
      tablet: { min: "376px", max: "1024px" },
      desktop: { min: "1025px", max: "1440px" },
    },
    extend: {
      colors: {
        ...COLORS,
      },
      fontFamily: {
        openSans: ["var(--font-openSans)"],
      },
      fontSize: {
        body: "15px",
        subtitle: "12px",
        heading: "18px",
        small: "10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
