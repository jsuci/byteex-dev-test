/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Sofia Sans", "sans-serif"],
      sans: ["Sofia Sans", "sans-serif"],
    },
    colors: {
      primary: "#01005B",
      secondary: "#F9F0E5",
      neutral: "#676869",
      white: "#fff",
      bgsection: "rgba(240, 238, 239, 1)",
      sectiontext: "#6C6C6C",
    },
    extend: {},
  },
  plugins: [],
};
