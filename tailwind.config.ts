/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Roboto', sans-serif",
      },
      maxWidth: {
        "max-content": "max-content",
      },
      screens: {
        xss: "375px",
      },
    },
  },
  plugins: [],
};
