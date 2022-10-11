import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';


function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;


    if(token != ""){
        navbarComponent = <AppBar className='navbar' position="static">
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
    }


    return (
        <>

        {navbarComponent}

        </>
    )
}

export default Navbar;