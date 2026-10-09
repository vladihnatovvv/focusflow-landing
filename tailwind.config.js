/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          700: '#2A3345',
          500: '#5B6478',
          300: '#A3AAB8',
        },
        paper: {
          DEFAULT: '#F6F5F1',
          dark: '#EDEBE4',
        },
        flow: {
          50: '#E9F6F2',
          100: '#CDEBE3',
          400: '#2BB89E',
          500: '#14A38E',
          600: '#0E7A6B',
          700: '#0B5F54',
          900: '#06302B',
        },
        amber: {
          400: '#F7B84B',
          500: '#F5A524',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -8px rgba(11,18,32,0.10)',
        phone: '0 40px 80px -24px rgba(6,48,43,0.45), 0 12px 24px -12px rgba(11,18,32,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
      },
    },
  },
  plugins: [],
}
