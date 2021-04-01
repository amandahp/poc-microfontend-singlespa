import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Home from './components/home/Home'
import GlobalStyles from './styles/GlobalStyles'
import theme from './theme/Theme'

function App(){
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>

  )
}

export default App