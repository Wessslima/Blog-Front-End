import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UserLogin from '../../model/UserLogin';
import './Login.css';

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid alignItems='center' xs={6}>

                <Box paddingX={20}>

                    <form onSubmit={onSubmit}>

                        <Typography 
                        className='signIn'
                        variant='h3' 
                        gutterBottom 
                        color='textPrimary' 
                        component='h3' 
                        align='center'>Sign in
                        </Typography>


                        <TextField 
                        className='bg-Form'
                        value={userLogin.usuario} 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='usuario' 
                        label='Usuário' 
                        variant='filled' 
                        name='usuario' 
                        margin='normal' 
                        fullWidth />


                        <TextField 
                        className='bg-Form'
                        value={userLogin.senha} 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='senha' 
                        label='Senha' 
                        variant='filled' 
                        name='senha' 
                        margin='normal' 
                        type='password'
                        fullWidth />


                        <Box marginTop={3} textAlign='center'>
                                <Button className='entrar' type='submit' variant='outlined'>
                                    Entrar
                                </Button>
                        </Box>

                    </form>


                    <Box display='flex' justifyContent='center' marginTop={3}>

                        <Box marginRight={1}>
                            <Typography 
                            className='ainda'
                            variant='subtitle1' 
                            gutterBottom 
                            align='center'>Ainda não tem uma conta?
                            </Typography>
                        </Box>


                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography 
                            className='clique'
                            variant='subtitle1' 
                            gutterBottom 
                            align='center'>Clique Aqui
                            </Typography>
                        </Link>
                            
                    </Box>
                    
                </Box>
            
            </Grid>

        <Grid xs={6} className='imagem'>

        </Grid>

        </Grid>
    );
}

export default Login;