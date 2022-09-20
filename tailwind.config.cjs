/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/galaxy-background.png')",
        duo: 'linear-gradient(90.86deg, #9572FC 33.08%, #43E7AD 33.94%, #E1D55D 75.57%)'
      }
    },
  },
  plugins: [],
}
