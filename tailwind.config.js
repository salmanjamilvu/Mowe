/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transWhite: 'rgba(255, 255, 255, 0.69)',
        lightGreen: '#69A88D'
      }
    },
  },
  plugins: [],
}

