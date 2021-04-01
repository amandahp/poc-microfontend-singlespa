import { createMuiTheme, colors } from '@material-ui/core';
import typography from './Typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#F4F6F8'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      tertiary: '#F4F6F8'
    },
    color: {
      primary: '#898989',
      secondary: 'rgb(101, 163, 0)',
      tertiary: '#FFFFFF'
    },
  },
  typography
});

export default theme;