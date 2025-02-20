/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using the 'dark' class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      /* ::: DARK MODE COLORS ::: */
      primary: {
        100: "#333333", // Darker gray
        200: "#444444",
        300: "#555555",
        400: "#666666", // Slight contrast boost
        500: "#777777",
        600: "#888888",
      },
      surface: {
        100: "#121212", // Almost black background
        200: "#1a1a1a",
        300: "#222222",
        400: "#2a2a2a",
        500: "#333333",
        600: "#3b3b3b",
      },

      /* ::: IMPROVED TEXT COLORS ::: */
      "on-background": "#ffffff", // White text for dark backgrounds
      "on-primary": "#e0e0e0", // Softer light gray for text on primary colors
      "on-surface": "#bcbcbc", // Light gray for readable text
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
