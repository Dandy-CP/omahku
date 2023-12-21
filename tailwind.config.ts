import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: { min: "320px", max: "480px" },
      tablet: { min: "481px", max: "768px" },
      laptop: { min: "769px", max: "1024px" },
      desktop: { min: "1025px", max: "1280px" },
      large: { min: "1281px", max: "1300px" },
    },
    extend: {
      fontFamily: {
        JktSans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2276C5",
        secondary: "#EDF6FE",
        dark: "#2D2D2D",
        gray: "#9496A5",
        blueSlate: "#FAFAFD",
        lightGray: "#F5F6F7",
      },
      backgroundImage: {
        "contactus-pattern": "url('/contactUsPattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
