const plugin = require('tailwindcss/plugin')
const site = require('./src/_data/site.json')

const colorFirst = plugin(function({ addUtilities }) {
    const newUtilities = {
        '.color-first:first-letter': {
            color: site.brandColor?site.brandColor:"rgba(79, 70, 229, 1)",
        },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
})

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
      }),
      animation: {
        'spin-slow': 'spin 3600s linear infinite'
      }      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
    colorFirst
  ]
};
