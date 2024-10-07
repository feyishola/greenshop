/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["cera-pro", "sans-serif"],
      },
      colors: {
        "primary-color": "#4BA358",
        "secondary-color": "#F5F5F5",
        "light-green": "#E4F2E7",
      },
    },
  },
  plugins: [],
};
