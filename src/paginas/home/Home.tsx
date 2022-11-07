import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
    if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")

    }
}, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bg-Home'>

                <Grid alignItems="center" item md={6} sm={12} xs={12}>

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


                    <Box display="flex" justifyContent="center">

                        <Box marginRight={2}>
                            <ModalPostagem />
                        </Box>

                        <Link to='/postagens' className='text-decorator-none'>
                        <Button className='botao' variant="outlined">Ver Postagens</Button>
                        </Link>

                    </Box>

                </Grid>


                <Grid item md={6} sm={12} xs={12} className="logo"></Grid>


                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>


            </Grid>
        </>
    );
}

export default Home;