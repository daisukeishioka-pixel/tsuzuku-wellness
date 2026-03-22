/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E63946',
        },
        text: {
          DEFAULT: '#2B2B2B',
          secondary: '#666666',
          light: '#888888',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          warm: '#FAF8F5',
          light: '#F5F5F5',
        },
        border: '#E8E8E8',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"DM Sans"', 'sans-serif'],
        display: ['"DM Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF6B35, #E63946)',
      },
    },
  },
  plugins: [],
}
