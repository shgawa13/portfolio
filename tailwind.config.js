/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-one": "#2c254a",
        "dark-two": "#2b2549",
        "dark-three": "#272042",
        "dark-four": "#201a36",
        "dark-purple": "#332f58",
        "light-purple": "#6746bf",
        "dark-pink": "#d94b87",
        light: "#cfc5ef",
        "light-pink": "#272143ff",
        "red-light": "#f65364",
        gray: "#ebe7f6",
        brown: "#ea8053",
      },
      screens: {
        sm: "480px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      gridTemplateColumns: {
        // custom columns
        "custom-md": "100px repeat(2,1fr)",
        "custom-lg": "100px repeat(3,1fr)",
      },
      gridTemplateRows: {
        "custom-md": "100px repeat(2,1fr)",
        "custom-lg": "",
      },
      dropShadow: {
        // custom shadow
        nano: "0 5px 15px #657CDB",
        icon: "0 1px 7px #000",
      },
      // animation section
      animation: {
        slideup: "slideup 1s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 2.2s ease-in-out",
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
