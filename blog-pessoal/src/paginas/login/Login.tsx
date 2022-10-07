import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, {ChangeEvent, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UserLogin from '../../model/UserLogin';
import './Login.css';

function Login() {

  let navigate = useNavigate()
  const [token, setToken] = useLocalStorage('token')
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
    })


    function updateModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
      })
    }


    useEffect(() => {
      if(token !== '') {
        navigate('/home')
      }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      try{
        await login (`/usuarios/logar`, userLogin, setToken)

        alert('Usuário Logado');

      }catch(error){
        alert('Dados Incorretos');
      }
    }


  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography className='cadastre' variant="h2" align='center'>Sign in</Typography>

              <TextField
              className='textfield'
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="usuario"
                label="Usuario"
                variant="filled"
                fullWidth
                margin="normal"
                name='usuario'
              />
              <TextField
              className='textfield'
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="senha"
                label="Senha"
                variant="filled"
                fullWidth
                margin="normal"
                name='senha'
                type='password'
              />
              <Box display='flex' justifyContent='center' marginTop={3}>
                  <Button className='entrar' type="submit" variant="outlined" color="primary">
                    Entrar
                  </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent='center' marginTop={3}>

                <Box marginRight={1}>

                  <Typography 
                  className='ainda' variant='subtitle1'>Ainda não tem uma conta?
                  </Typography>

                </Box>

                <Link to='/cadastro' className='cadastre'>
                  <Typography 
                    className='negrito' 
                    variant='subtitle1' 
                    align='center'>Cadastre-se
                  </Typography>
                </Link>

            </Box>

          </Box>
        </Grid>

        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;