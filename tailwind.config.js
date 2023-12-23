/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'text-bg': "url('./me.jpeg')"
      }
    },
  },
  plugins: [],
}
