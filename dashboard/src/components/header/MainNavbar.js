import React, {useEffect} from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../../utils/logo.svg';
import {
  Box,
  Avatar,
  Typography,
  Select
} from '@material-ui/core';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';


const MainNavbar = (props) => {
  useEffect(() => {
    localStorage.setItem("user","Amanda")
  }, [])

  const user = localStorage.getItem("user")

  return(
    <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <Box display="flex" sx={{position:'relative'}}>
        <Logo />
        <Avatar 
        sx={{
          backgroundColor: grey[300], 
          position: 'absolute', 
          left: '200px', 
          top: '10px',
          '&:hover':{
            color:'color.tertiary', 
            backgroundColor: 'color.secondary',
            cursor: 'pointer',
            }
          }}>
          <ViewModuleIcon
          />
        </Avatar>
        <Box
        sx={{color: 'text.secondary', position:'absolute'}}
        >
          <Typography
            sx={{position:'absolute', left:'250px', top:'20px'}}
            variant="h5"
          >
            RESUMO
          </Typography>
        </Box>
        <Avatar 
        sx={{
          backgroundColor: grey[300], 
          position:'absolute', 
          left: '1140px',  
          top: '10px',
          '&:hover':{
            color:'color.tertiary', 
            backgroundColor: 'color.secondary',
            cursor: 'pointer',
          }
          }}>
          <PersonIcon />
        </Avatar>
        <Select sx={{color: 'text.secondary', position:'absolute', left:'1190px',  top: '13px'}} value={user}>
          <option value={user} style={{background:"#F4F6F8", padding:10, color:'text.secondary'}} selected>
            {user}
          </option>
          <option value='sair' style={{background:"#F4F6F8", padding:10, color:'text.secondary'}}>
            Sair
          </option>
        </Select>
      </Box>
    </Toolbar>
  </AppBar>
  )
};

export default MainNavbar;
