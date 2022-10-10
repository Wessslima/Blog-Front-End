import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'


function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }


    return (
        <>
            <AppBar className='navbar' position="static">
                <Toolbar variant="dense">
                    <Box>
                        <Typography variant="h5" color="inherit">
                            WEST
                        </Typography>
                    </Box>


                    <Grid container justifyContent="flex-end">
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className='cursor'>
                            <Box mx={1}>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>


                        <Link to="/postagens" className='cursor'>
                            <Box mx={1}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>


                        <Link to="/temas" className='cursor'>
                        <Box mx={1}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        </Link>


                        <Link to="/formularioTema" className='cursor'>
                        <Box mx={1}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>


                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                        
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;