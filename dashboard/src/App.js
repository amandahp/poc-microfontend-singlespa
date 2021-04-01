import React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './styles/GlobalStyles';
import './mixins/chartjs';
import theme from './theme/Theme';
import Dashboard from './pages/Dashboard'
import DashboardSidebar  from './components/container/DashboardSidebar';
import MainLayout from './components/header/MainLayout'

function App(){

  return (
    <>
      <DashboardSidebar />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
        <Dashboard />
      </ThemeProvider>
    </>

  );
};

export default App;
