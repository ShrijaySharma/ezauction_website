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
        display: ['Oswald', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        sharp: '4px 4px 0px #0F172A',
        'sharp-hover': '6px 6px 0px #0F172A',
        'sharp-light': '4px 4px 0px #FFFFFF',
      },
      colors: {
        primary: "#0b1326", // Deep Slate / Space Grotesk background
        accent: "#00e6f5",  // Vibrant Cyan
        secondary: "#cf5cff", // Neon Purple
        background: "#060e20", // Void-like dark background
        surface: "#131b2e", // surface-container-low
        surfaceHigh: "#2d3449", // surface-container-highest
        textDark: "#dae2fd", // off-white text
        textMuted: "#bac9cc",
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
