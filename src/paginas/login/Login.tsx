import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../model/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        }
        );

        const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        });


        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }


            //pega o token e o id do json e guarda no redux
            useEffect(()=> {
                if(respUserLogin.token !== ''){
                    dispatch(addToken(respUserLogin.token))
                    dispatch(addId(respUserLogin.id.toString()))
                    navigate('/home');
                }
            }, [respUserLogin.token])


        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setRespUserLogin);
                toast.success('Logado', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }catch(error){
                toast.error('Login ou senha inválidos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='azul'>

            <Grid alignItems='center' md={6} sm={12} xs={12}>

                <Box paddingX={15}>

                    <form onSubmit={onSubmit}>

                        <Typography 
                        className='signIn'
                        variant='h3' 
                        gutterBottom 
                        color='textPrimary' 
                        component='h3' 
                        align='center'>WEST
                        </Typography>


                        <TextField 
                        className='bg-Form'
                        value={userLogin.usuario} 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='usuario' 
                        label='Email de Usuário' 
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

        <Grid md={6} sm={12} xs={12} className='imagem'>

        </Grid>

        </Grid>
    );
}

export default Login;