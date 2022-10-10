import React , {useState, useEffect, ChangeEvent } from 'react';
import User from '../../model/User';
import { cadastroUsuario } from '../../service/Service';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            
            <Grid item xs={6} className='imagem2'></Grid>

                <Grid item xs={6} alignItems='center'>
                    
                    <Box paddingX={10}>
                        
                    <form onSubmit={onSubmit}>

                        <Typography 
                        className='signUp'
                        variant='h3' 
                        gutterBottom 
                        color='textPrimary' 
                        component='h3' 
                        align='center'>Sign up
                        </Typography>


                        <TextField 
                        className='bg-Form2'
                        required
                        value={user.nome} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        id='nome' 
                        label='Nome' 
                        variant='filled' 
                        name='nome' 
                        margin='normal' 
                        fullWidth />


                        <TextField 
                        className='bg-Form2'
                        required
                        value={user.usuario} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='usuario' 
                        label='Nome de Usuário' 
                        variant='filled' 
                        name='usuario' 
                        margin='normal'
                        fullWidth />


                        <TextField 
                        className='bg-Form2'
                        required
                        value={user.senha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='senha' 
                        label='Senha' 
                        variant='filled' 
                        name='senha' 
                        margin='normal' 
                        type='password' 
                        fullWidth />


                        <TextField 
                        className='bg-Form2'
                        required
                        value={confirmarSenha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                        id='confirmarSenha' 
                        label='Confirmar Senha' 
                        variant='filled' 
                        name='confirmarSenha' 
                        margin='normal' 
                        type='password' 
                        fullWidth />


                        <Box display='flex' justifyContent='space-around' marginTop={4}>
                            <Link to='/login' className='text-decorator-none'>
                                <Button className='bt-Cancelar' variant='outlined' color='secondary'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button className='bt-Cadastrar' type='submit' variant='outlined'>
                                    Cadastrar
                            </Button>
                        </Box>

                    </form>

                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;