/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },

      colors: {
        // brand: "#E7522A",
        // lightBg: "#F9FAFB",
        // lightHeading: "#111827",
        // lightDesc: "#6b7280",

        // darkBrand: "#E7522A",
        // darkBg: "#111827",
        // darkHeading: "#ffffff",
        // darkDesc: "#e5e7eb",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      boxShadow: {
        brandShadow: "0 0 15px rgba(0, 0, 0, .30)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
