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
      desktop: { min: "376px",max: "1440px" },
    },
    extend: {
      colors: {
        ...COLORS
      },
    },
  },
  plugins: [],
} satisfies Config;
