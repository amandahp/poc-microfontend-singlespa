import 'regenerator-runtime/runtime'
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link
} from '@material-ui/core';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeSenha = (event) => {
    setPassword(event.target.value)

  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  const submitForm = async (event) => {
    event.preventDefault()
    if (email && password) {
      const result = await axios.post("https://run.mocky.io/v3/cef5127a-fbfe-4d6b-89cc-6296fd666fcb", { email, password })
      console.log(result)
      if (result.status === 200) {
        const { data: { userName } } = result
        localStorage.setItem('userName', userName)
        window.location = "/dashboard"
      }
    }
  }


  return (
    <>
      <form
        onSubmit={submitForm}
        style={{
          'backgroundColor': 'background.default',
          'display': 'flex',
          'position': 'relative',
          'flexDirection': 'column',
          'height': '100%',
          'widht': '100vw',
          'justifyContent': 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            display: 'inline-grid',
            flexDirection: 'column',
            widht: '100vw',
            justifyContent: 'center',
            marginTop: '115px'
          }}
        >
          <Typography
            sx={{
              color: 'color.primary',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '20px'
            }}
            variant="h4"
          >
            Acessar minha conta
          </Typography>
          <TextField
            sx={{
              width: '400px',
              '&:hover': {
                color: 'color.secondary',
              },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="exemplo@email.com"
            onChange={onChangeEmail}
          />
          <TextField
            sx={{
              marginTop: '20px',
              '&:hover': {
                borderColor: 'color.secondary',
              },
            }}
            id="standard-password-input"
            type="password"
            autoComplete="current-password"
            label="Senha"
            variant="outlined"
            placeholder="********"
            onChange={onChangeSenha}
          />
          <Link>
            <Typography
              variant="h6"
              sx={{
                color: 'color.primary',
                top: '10px',
                '&:hover': {
                  color: 'color.secondary',
                },
                cursor: 'pointer'
              }}
            >
              Esqueci minha senha
            </Typography>
          </Link>
          <Button
            sx={{
              marginTop: '30px',
              backgroundColor: 'color.secondary',
              height: '40px',
              color: 'text.tertiary',
              '&:focus': {
                backgroundColor: 'color.secondary',
              },
              '&:hover': {
                backgroundColor: 'color.green',
              }
            }}
            variant="contained"
            type="submit"
          >
            Entrar
          </Button>
        </Box>
      </form>

    </>
  );
};

export default Login;
