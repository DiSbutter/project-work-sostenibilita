/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colori brand Gruppo CAVIRO - Basati su Pantone P 7645C e P 209C
      colors: {
        // Colore principale: Pantone P 209C - Bordeaux/Vino
        primary: '#8B1538',
        // Colore secondario: Pantone P 7645C - Grigio antracite
        secondary: '#2B2B2B',
        // Variante P 209C al 65% - Bordeaux chiaro
        accent: '#AB4660',
        // Variante P 209C al 30% - Rosa tenue
        light: '#D9A8B5',
        // Nero 40% per testi secondari
        'text-secondary': '#666666',
        // Colori neutri aggiuntivi per coerenza
        neutral: {
          50: '#F8F8F8',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B4B4B4',
          400: '#666666',
          500: '#4A4A4A',
          600: '#2B2B2B',
          700: '#1A1A1A',
          800: '#0D0D0D',
          900: '#000000',
        },
      },
      // Font family: Merriweather per titoli, Lato per corpo
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
