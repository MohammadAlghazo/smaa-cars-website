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
            900: "#0b1528",
            800: "#13274a",
            700: "#1d3a6e",
            600: "#274f96",
            500: "#3266bf",
          },
          red: {
            600: "#dc2626",
            500: "#ef4444",
            400: "#f87171",
          },
          light: "#f8fafc",
          dark: "#020617"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to top, #020617, transparent)',
      }
    },
  },
  plugins: [],
};
export default config;
