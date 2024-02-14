/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3c486b',
        'secondary': '#f0f0f0',
        'accent': '#f9d949',
        'warn': '#f45050',
      }
    }
  },
  plugins: [],
}

