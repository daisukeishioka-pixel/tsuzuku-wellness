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
          light: '#FF8C5A',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          soft: '#141414',
          card: '#1A1A1A',
          border: '#2A2A2A',
        },
        text: {
          DEFAULT: '#1A1A1A',
          secondary: '#555555',
          light: '#999999',
          inverse: '#FFFFFF',
          'inverse-muted': 'rgba(255,255,255,0.6)',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          warm: '#FAF8F5',
          cream: '#F5F0EB',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 8rem)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF6B35, #E63946)',
      },
    },
  },
  plugins: [],
}
