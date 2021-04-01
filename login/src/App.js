import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Login from './components/login/Login'
import GlobalStyles from './styles/GlobalStyles'
import theme from './theme/Theme'

function App(){
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>

  )
}

export default App