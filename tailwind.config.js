module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo': "url('/src/assets/magical-logo.svg')",
      }),
      height: {
        '80vh': '80vh',
        '100vh': '100vh',
        '120vh': '120vh',
        '200vh': '200vh',
        '15min': '2.5%', // 15 min
        '30min': '5%',  // 30 min      
        '45min': '7.5%',  // 45 min      
        '1hour': '10%',  // 45 min      
        '1/10': '10%', // 1 hour
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      width: {
        '100vw': '100vw'
      },
      inset: {
        '6/10': '60%'
      },
      gridTemplateRows: {
        'cal': 'auto 1fr',
      },
      spacing: {
        'line': '1px'
      },
      margin: {
        '10vh': '10vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
