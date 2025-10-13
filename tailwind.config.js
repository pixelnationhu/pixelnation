/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        serifFancy: ["Cormorant Garamond", "serif"],
        sansSoft: ["Inter", "system-ui", "sans-serif"],
        tan: ["TanNimbus", "serif"], // 👈 EZT ADD HOZZÁ
      },
    },
  },
  plugins: [],
};
