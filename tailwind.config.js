/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'lg2': {'max': '1623px'},
      'lg': {'max': '1023px'},
      'tl': {'max': '723px'},
      },
    extend: {
      backgroundImage: {
        'back': "url('./public/images/bg.jpg')",
        'skills': "url('./public/images/banner-bg.png')"
      }
    },
  },
  plugins: [],
}
