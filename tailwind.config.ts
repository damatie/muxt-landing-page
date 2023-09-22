import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "Sans-serif"],
        Inter: ["Inter", "Sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#4A154b",
        primaryLight: "#902694",
        secondary: "#00A856",
        tertiary: "#e3b34c",
        bluePrimary: "#64c3eb",
        offWhite: "#F8F8FA",
        offBlue: "#F4F7FE",
        bodyText: "#383A47",
        danger: "#F87171",
      },
      keyframes: {
        "zoom-in": {
          "0%": {
            transform: "scale(.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(5rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(5rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "zoom-in": "zoom-in .3s ease-in-out",
        "zoom-out": "zoom-in .3s ease-in-out reverse",
        "fade-up": "fade-up .5s ease-in-out",
        "fade-in": "fade-in .5s ease-in-out",
        "fade-left": "fade-left .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
