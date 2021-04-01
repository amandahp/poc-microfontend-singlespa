import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Header from './components/header/index'
import GlobalStyles from './styles/GlobalStyles'
import theme from './theme/Theme'

function App(){
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>

  )
}

export default App