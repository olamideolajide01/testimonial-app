/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        neutral: "#222",
        white: "#ffffff",
        black: "#242120",
        orange: "#FF5C00",
        "blob-pink": " #FFF8F5",
        "blob-grey": "#2E2E2E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
