module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '100vh': '100vh',
        '200vh': '200vh'
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
