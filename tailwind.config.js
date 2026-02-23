/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#020617", // Dark Slate / Near Black
        accent: "#3b82f6",  // Blue-500 (More vibrant than indigo for sports)
        secondary: "#8b5cf6", // Violet-500
        background: "#F8FAFC", // Slate-50
        textDark: "#0F172A", // Slate-900
        league: {
          blue: "#2563eb",
          gold: "#f59e0b",
          red: "#dc2626",
          green: "#16a34a"
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
