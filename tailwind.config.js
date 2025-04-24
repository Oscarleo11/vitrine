/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e1f1',
          200: '#b3c3e3',
          700: '#1a3366',
          800: '#142952',
          900: '#0d1f3d'
        }
      }
    },
  },
  plugins: [],
};