/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,jpg,png}',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '100': '25rem',
      },
      backgroundImage: {
        'cafe': "url('../src/assets/images/twowaybg.png')",
        'coffee': "url('../src/assets/images/coffeecup.jpg')",
        'sandwich': "url('../src/assets/images/sandwich.jpg')",
        'giftcard': "url('../src/assets/images/giftcard.jpeg')",
      },
      colors: {
        'azure': '#F2F2F3',
        'walnut' : '#422006'
      },
    },
  },
  plugins: [],
}