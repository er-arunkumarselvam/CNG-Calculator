/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        skyblue:"#9cecfb",
        blue:"#65c7f7",
        darkblue:"#0052d4",
      }
    },
  },
  plugins: [],
};
