import colors from 'vuetify/es5/util/colors'
// import '@fortawesome/fontawesome-free/css/all.css'

export default {
  customVariables: ['@/assets/variables.scss'],
  defaultAssets: {
    icons: 'mdi' || 'fa'
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        anchor: '#ffffff',
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        cRed: '#B21F16',
        cOrange: '#CB6527',
        cBlue: '#5FA29F',
        cYellow: '#E9D13D',
        cExtraLightGray: '#efefef',
        cDark: '#4D4F5C',
        cLight: '#F0F4FD',
        cLightGray: '#c4c4c4',
        cSemiLightGray: '#a4a4a4',
        cPurple: '#571845'
        /* gAquaMarine: '#04C491',
        gBlue: '#006AFF',
        cDark: '#4D4F5C',
        gDarkBlue: '#010E28',
        gExtraLightGray: '#efefef',
        gGray: '#5B6886',
        gLight: '#F0F4FD',
        gLightGray: '#c4c4c4',
        gSemiDarkBlue: '#03124E',
        gSemiLightGray: '#a4a4a4' */
      },
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        anchor: 'rgba(0, 0, 0, 0.87)',
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        cRed: '#B21F16',
        cOrange: '#CB6527',
        cBlue: '#5FA29F',
        cYellow: '#E9D13D',
        cExtraLightGray: '#efefef',
        cDark: '#4D4F5C',
        cLight: '#F0F4FD',
        cLightGray: '#c4c4c4',
        cSemiLightGray: '#a4a4a4',
        cPurple: '#571845'
        /* gAquaMarine: '#04C491',
        gBlue: '#006AFF',
        cDark: '#4D4F5C',
        gDarkBlue: '#010E28',
        gGray: '#5B6886',
        gLight: '#F0F4FD',
        gLightGray: '#c4c4c4',
        gSemiDarkBlue: '#03124E',
        gSemiLightGray: '#a4a4a4' */
      }
    }
  }
}
