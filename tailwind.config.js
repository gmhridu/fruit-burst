/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1440px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
};
