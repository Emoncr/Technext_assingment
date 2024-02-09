/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },

      colors: {
        brand: "#E7522A",
        lightBg: "#F9FAFB",
        lightHeading: "#111827",
        lightDesc: "#6b7280",

        darkBrand: "#E7522A",
        darkBg: "#111827",
        darkHeading: "#ffffff",
        darkDesc: "#e5e7eb",
      },
      boxShadow: {
        brandShadow: "0 0 15px rgba(0, 0, 0, .30)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
