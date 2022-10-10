import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';

function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
    if (token == "") {
        alert("Você precisa estar logado")
        navigate("/login")

    }
}, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bg-Home'>

                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} >

                        <Typography 
                        variant="h3" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h3" 
                        align="center" 
                        className='titulo'>WELCOME
                        </Typography>


                        <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h5" 
                        align="center" 
                        className='titulo'>Qual a boa?
                        </Typography>

                    </Box>


                    <Box display="flex" justifyContent="center">

                        <Box marginRight={2}>
                            <ModalPostagem />
                        </Box>

                        <Button className='botao' variant="outlined">Ver Postagens</Button>

                    </Box>

                </Grid>


                <Grid item xs={6} className="logo"></Grid>


                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>


            </Grid>
        </>
    );
}

export default Home;