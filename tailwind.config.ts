import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apricot: {
          100: "#fdefe5",
          200: "#f7d6c3",
          300: "#edb69a",
          400: "#dd8e68",
          500: "#cb6b3f",
          600: "#ad4f26",
          700: "#883a1d",
          800: "#632916",
          900: "#39150c",
        },
        denim: {
          100: "#e7f0f5",
          200: "#c4d8e2",
          300: "#9bbac9",
          400: "#7099ae",
          500: "#4c788f",
          600: "#345b6f",
        },
        neutral: {
          0: "#fffdfc",
          25: "#fbf7f6",
          50: "#f8f2ef",
          75: "#f4ebe7",
          100: "#ede2de",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Archivo", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
