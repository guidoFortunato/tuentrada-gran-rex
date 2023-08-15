/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "mont": ["Montserrat"],
    },
    extend: {
      boxShadow: {
        'light': '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
