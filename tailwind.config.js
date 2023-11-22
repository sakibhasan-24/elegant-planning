/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navText: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
