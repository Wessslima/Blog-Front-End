import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  function goLogout(){
    setToken('')
    alert("Usuário deslogado")
  navigate('/login')
}

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Box>
            <Typography variant="h5" color="inherit">
              WEST
            </Typography>
          </Box>

          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="start">

              <Link to= '/home' className='cursor'>
              <Box mx={1}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
              </Link>

              <Link to= '/posts' className='cursor'>
              <Box mx={1}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              </Link>

              <Link to= '/temas' className='cursor'>
              <Box mx={1}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              </Link>

              <Link to= '/formularioTema' className='cursor'>
              <Box mx={1}>
                <Typography variant="h6" color="inherit">
                  Cadastrar Temas
                </Typography>
              </Box>
              </Link>

                  <Link to='/login' className='cursor'>
                  <Box mx={1} onClick={goLogout}>
                      <Typography variant="h6" color="inherit">
                        Logout
                      </Typography>
                  </Box>
                  </Link>

            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;