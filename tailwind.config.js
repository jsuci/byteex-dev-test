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
    },
    extend: {},
  },
  plugins: [],
};
