import type { Config } from "tailwindcss";
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        neutral: "var(--neutral)",
        white: "var(--white)",
        zinc100: "var(--zinc100)",
        zinc200: "var(--zinc200)",
        zinc300: "var(--zinc300)",
        zinc500: "var(--zinc500)",
        zinc800: "var(--zinc800)",
        error: "var(--error)",
      },
      fontFamily: {
        mainFont: ["Sora", "serif"]
      },
      screens: {
        "2xl": "1440px"
      }
    }
  },
  plugins: [daisyui],
} satisfies Config;
