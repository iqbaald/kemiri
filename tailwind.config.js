/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-sm": "0 1px 2px 0 rgba(255, 255, 255, 0.05)", //White shadow
        blue: "0 1px 3px 0 rgba(0, 0, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 255, 0.06)", //Blue shadow (for testing purposes)
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
