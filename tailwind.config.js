module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo': "url('/src/assets/magical-logo.svg')",
        'product-img-lg': "url('../src/assets/product-img-lg.jpg')",
        'product-img-sm': "url('../src/assets/product-img-sm.jpg')",
        'facebook': "url('../src/assets/facebook.svg')",
        'twitter': "url('../src/assets/twitter.svg')",
        'linkedin': "url('../src/assets/linkedin.svg')",
        'calendly-logo': "url('../src/assets/calendly_logo.svg')",
        'doodle-logo': "url('../src/assets/doodle_logo.svg')",
        'fellow-logo': "url('../src/assets/fellow_logo.svg')",
        'clockwise-logo': "url('../src/assets/clockwise_logo.svg')",
        'rescuetime-logo': "url('../src/assets/rescuetime_logo.svg')",
        'woven-logo': "url('../src/assets/woven_logo.svg')",
      }),
      colors: {
        'cal-orange': 'rgba(241, 130, 49, 1);',
        'cal-blue': '#2E40C6',
        'cal-yellow': '#F9B912',
        'cal-purple': '#7908A3',
        'cal-green': '#2FAD5F',
        'cal-red': '#CD0303',
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
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
      minHeight: {
        '80vh': '80vh'
      },
      width: {
        '100vw': '100vw',
        '11/10': '110%'
      },
      inset: {
        '6/10': '60%'
      },
      gridTemplateRows: {
        'cal': 'auto 1fr',
        '40':'repeat(40, 1fr)'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-7': 'span 7 / span 7',
        'span-10': 'span 10 / span 10',
        'span-9': 'span 9 / span 9',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      spacing: {
        'line': '1px'
      },
      margin: {
        '10vh': '10vh',
        '-1/20': '-5%'
      },
      fontSize: {
        '12vw': '12vw',
        '10xl': '10rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
