const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.njk', './src/**/*.svg'],
    layers: ['components', 'utilities'],
    options: {
      safelist: ['header-shadow', '-translate-y-full', 'hidden']
    }
  },
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1': {
              fontWeight: '700'
            },
            'blockquote': {
              fontWeight: 'normal',
              color: theme('colors.gray.700')
            },  
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
