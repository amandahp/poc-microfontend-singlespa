import React from 'react'
import {
  Typography,
  Box,
  Button,
  Avatar,
  Divider,
} from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import EventIcon from '@material-ui/icons/Event';


export const Filter = () => {
  const buttons = ["Hoje","7 dias","15 dias","30 dias"]

    
  const today = new Date();


  const user = localStorage.getItem('user')

  return(
    <>
      <Box sx={{color: 'text.secondary',display:'flex',  marginTop:15, marginLeft:35}}>
        <Typography variant="h2">
          Olá, {user}
        </Typography>
        <Box sx={{paddingLeft: '50px', display: 'flex', position: 'relative'}}>
          <Avatar
            sx={{
              position: 'absolute',
              left: '29vw',
              '&:hover':{
              color:'color.tertiary', 
              backgroundColor: 'color.secondary',
              cursor: 'pointer',
              width: '50px',
              height: '50px'
            }
            }}
          >
            <GetAppIcon>
            </GetAppIcon>
          </Avatar>
          <Box sx={{
            position: 'relative',
            left: '30vw'
          }}>
            { buttons.map((buttonText, index) => {
              return <Button sx={{
              color: 'inherit ', 
              '&:hover':{
              color:'color.primary',
              borderWidth: '0px 0px 2px 0px',
              borderColor: 'color.secondary',
              borderStyle: 'solid',
              borderRadius:'0px',
              }}} key={index+5} disableElevation>{buttonText}</Button>
            })}
          </Box>
          <Divider 
            sx={{
              color: 'black', 
              height:'40px', 
              position: 'relative',
              left: '10vw'
              }} orientation="vertical" />
          <Avatar
            sx={{
              position: 'absolute',
              left: '55vw',
              '&:hover':{
              color:'color.tertiary', 
              backgroundColor: 'color.secondary',
              cursor: 'pointer',
              width: '50px',
              height: '50px'
            }
            }}
          >
            <EventIcon />
          </Avatar>
          <Button 
          sx={{              
            position: 'absolute',
            left: '58vw',
            color:'green', 
            border: '1px solid green',
            marginLeft:'10px', 
            '&:hover':{
            color:'color.tertiary', 
            backgroundColor: 'color.secondary',
          }}}>FILTRAR</Button>
        </Box>
      </Box>
      <Box>
        <Typography sx={{marginLeft:35, marginTop:2, color:'text.secondary'}} variant="h6">
          Aqui está um resumo geral de sua conta entre {today.toLocaleString('pt-br')} e 01/03/2021
        </Typography>
      </Box>
    </>
  )
}
