/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1300px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: 'hsla(216, 94%, 57%, 1)',
        primaryDark: 'hsla(215, 24%, 19%, 1)',
        primaryLight: 'hsla(217, 79%, 96%, 1)',
        accent: 'hsla(108, 44%, 47%, 1)',
        grayText: '#4D5254',
      },
      fontFamily: {
        custom: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
