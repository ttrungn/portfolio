/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      /* ::: GRAY-DOMINANT THEME ::: */
      primary: {
        100: "#444444",
        200: "#5a5a5a",
        300: "#6e6e6e",
        400: "#888888", // Lightened for better contrast
        500: "#a0a0a0",
        600: "#bcbcbc",
      },
      surface: {
        100: "#1a1a1a",
        200: "#242424",
        300: "#2e2e2e",
        400: "#383838",
        500: "#424242",
        600: "#ffffff",
      },

      /* ::: IMPROVED TEXT COLORS ::: */
      "on-background": "#ffffff", // Pure white for best readability
      "on-primary": "#f5f5f5", // Slightly off-white for softer contrast
      "on-surface": "#e0e0e0", // Light gray for readable text on dark surfaces
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ['"Inter"', "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
