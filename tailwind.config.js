/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.jsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
