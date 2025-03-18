module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        vcr: ['VCR_OSD_MONO', 'monospace'],
        Hatolie: ['Hatolie', 'monospace'],
      },

      colors: {
        brand: {
          100: '#eb3467',
          200: '#d12e5b',
          300: '#b82850',
          400: '#731932'

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
