/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "techit-gray": {
          100: "#737373",
          200: "#222222",
        },
      },
    },
  },
  plugins: [],
};
