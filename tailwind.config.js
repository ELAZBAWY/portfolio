/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← مهم جدًا عشان نتحكم بالوضع الليلي يدويًا
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
