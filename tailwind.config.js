/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#0f172a",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
        "text-light": "#e2e8f0",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in",
        slideUp: "slideUp 0.8s ease-out",
        slideDown: "slideDown 0.6s ease-out",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
