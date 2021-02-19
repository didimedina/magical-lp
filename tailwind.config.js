module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '100vh': '100vh'
      },
      width: {
        '100vw': '100vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
