/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm:'576px'
      },
      colors:{
        primary: '#F0F2F3',
        secondary: '#272343',
        primary_1:'#007580',
        derk_gray: '#636270'
      }
    },
  },
  plugins: [],
};
