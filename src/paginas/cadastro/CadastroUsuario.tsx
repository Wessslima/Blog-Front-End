import React , {useState, useEffect, ChangeEvent } from 'react';
import User from '../../model/Usuario';
import { cadastroUsuario } from '../../service/Service';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [cadastro, setCadastro] = useState(false)
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

        useEffect(() => {
            if(user.nome.length > 3 && user.usuario !== '' && user.senha.length >= 8 ) {
            setCadastro(true)
            }
        }, [user])



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


    async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
    try {
        await cadastroUsuario('usuarios/cadastrar', user, setUserResult);
        toast.success('Cadastro Realizado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    } catch (error) {
        toast.error('Dados Inválidos', {
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
    } else {
    alert(
        'Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.'
    );
    }
}




    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='vermelho'>

                <Grid item xs={6} alignItems='center'>
                    
                    <Box paddingX={10}>
                        
                    <form onSubmit={cadastrar}>

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
                        label='Email de Usuário' 
                        variant='filled' 
                        name='usuario' 
                        margin='normal'
                        fullWidth />


                        <TextField 
                        className='bg-Form2'
                        value={user.foto} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='foto' 
                        label='Insira o Link da sua Foto' 
                        variant='filled' 
                        name='foto' 
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
                            <Button className='bt-Cadastrar' type='submit' variant='outlined' disabled={!cadastro}>
                                    Cadastrar
                            </Button>
                        </Box>

                    </form>

                </Box>

            </Grid>

            <Grid item xs={6} className='imagem2'></Grid>

        </Grid>
    );
}

export default CadastroUsuario;