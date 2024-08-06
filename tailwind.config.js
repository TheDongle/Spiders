/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#019267",
        teal: "#00C897",
        orange: "#FFD365",
        yellow: "#FDFFA9",
      },
      rotate: {
        135: "135deg",
      },
    },
  },
  plugins: [],
};
