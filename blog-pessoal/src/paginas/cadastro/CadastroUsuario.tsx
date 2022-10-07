import { Typography } from '@material-ui/core'
import { Box, Button, Grid, TextField } from '@mui/material'
import User from '../../model/User'
import { cadastroUsuario } from '../../service/Service'
import { Link, useNavigate } from 'react-router-dom'
import React, {ChangeEvent, useState, useEffect} from 'react';
import './CadastroUsuario.css'

function CadastroUsuario() {

  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
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
      if(userResult.id !== 0) {
        navigate('/login')
      }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if(confirmarSenha == user.senha){
        cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
        alert('Usuário Cadastrado')
      }else{
        alert('Dados Inconcistentes')
      }
    }

  return (
    <>
      <Grid container alignItems='center' justifyContent='center'>

        <Grid item xs={6} className='bg-cadastro'></Grid>

        <Grid container xs={6} justifyContent='center'>
          
          <Grid item xs={8} justifyContent='center'>
            <form onSubmit={onSubmit}>
              <Typography className='cadastro' align='center' variant='h2'>Cadastre-se</Typography>

              <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                name='nome'
              />
              <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
                name='usuario'
              />
              <TextField
                id="foto"
                label="Foto (url)"
                variant="outlined"
                fullWidth
                margin="normal"
                name='foto'
              />
              <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
                name='senha'
              />
              <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
                name='confirmarSenha'
              />

              <Box display='flex' justifyContent='space-around' marginTop={2}>

                <Link to='/login' className='cancelar'>
                  <Button variant="contained" color="secondary">
                    Cancelar
                  </Button>
                </Link>

                  <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                  </Button>

              </Box>
            </form>

            
          </Grid>
          
        </Grid>

      </Grid>
    </>
  )
}

export default CadastroUsuario