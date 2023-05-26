/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#be185d',
        dark: '#0f172a',
        second: '#64748b',
        tombol: '#172554',
        hover: '#1d4ed8',
        darkm: '#14b8a6',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

