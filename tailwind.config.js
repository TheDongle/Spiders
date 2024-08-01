/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackOlive: "#202E24",
        forestGreen: "#347A2A",
        mossGreen: "#B3C87A",
        dairyCream: "#EBE8BE",

        blackPearl: "#021526",
        midnightBlue: "#03346E",
        moonstoneBlue: "#6EACDA",
        colonialWhite: "#E2E2B6"
      },
    },
  },
  plugins: [],
};
