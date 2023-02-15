/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp : {
          '0%' : {transform: 'translateY(100%)'},
          '100%' : {transform : 'translateY(0%)'}
        }
      },
      animation:{
        slideUp : 'slideUp 0.25s ease-in-out'
      },
      backgroundImage : {
        'main' : "url('/src/media/mainCarrousel.jpeg')",
        "garden" : "url('/src/media/gardenBackground.jpg')",
        'loja' : 'url("/src/media/loja.jpeg")',
        "filler" : "url('/src/media/filler.jpeg')"
      }
    },
  },
  plugins: [],
}