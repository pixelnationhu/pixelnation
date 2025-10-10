/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        brandRed: "#d7090d",
        aqua: "#a2cbcd",
        paper: "#f7f7f7",
        fog: "#e4e4e4",
        slateTea: "#96adb5",
        softMint: "#afc4c9",
      },
      fontFamily: {
        serifFancy: ["Cormorant Garamond", "serif"],
        sansSoft: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
