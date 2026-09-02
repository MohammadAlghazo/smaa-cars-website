import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        smaa: {
          blue: {
            900: "#0f234b", // Deep corporate blue
            800: "#183670",
            700: "#2450a5",
            600: "#3266bf",
            500: "#497bd0",
          },
          red: {
            600: "#dc2626", // Corporate red
            500: "#ef4444", // Bright red for arrows/hovers
            400: "#f87171",
          },
          light: "#ffffff",
          gray: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            800: "#1e293b",
            900: "#0f172a",
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #0f234b, transparent)',
      }
    },
  },
  plugins: [],
};
export default config;
