/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ Important for Vite!
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Your component files
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
        },
        purple: {
          900: "#4C1D95",
          800: "#5B21B6",
          700: "#6D28D9",
          600: "#7C3AED",
          500: "#8B5CF6",
          400: "#A78BFA",
          300: "#C4B5FD",
          200: "#DDD6FE",
          100: "#EDE9FE",
        },
        pink: {
          600: "#DB2777",
          500: "#EC4899",
          400: "#F472B6",
        },
      },
    },
  },
  plugins: [],
};
