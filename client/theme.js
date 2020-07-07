import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
      primary: {
      light: '#FFECB3',//52c7b8 BC986A  0336FF    6200EE  D1C4E9
      main: '#ba2b2b',//009688          FFDE03    03DAC5  7E57C2
      dark: '#795548',//                FF0266    3700B3  311B92
      contrastText: '#fff',
    },
    secondary: {
      light: '#F8BBD0',//ffd95b FBEEC1
      main: '#FF8A80',
      dark: '#880E4F',
      contrastText: '#000',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  