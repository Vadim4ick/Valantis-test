/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "1fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
