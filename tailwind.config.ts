import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      keyframes: {
        linearGradient: {
          "0%": { backgroundPosition: "10% 0%" },
          "50%": { backgroundPosition: "91% 100%" },
          "100%": { backgroundPosition: "10% 0%" },
        },
      },
      animation: {
        "gradient-animation": "linearGradient 1s ease-in-out infinite",
      },
      colors: {
        light_black_grey: {
          light: "#FAFAFA",
          dark: "#1F1F1F",
        },
        grey_milk_weight: {
          light: "#6B6B6B",
          dark: "#F4F4F4",
        },
        black_white: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        pink: {
          light: "#FF7795",
          dark: "#FF7795",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
