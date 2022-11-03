import { Box, Button, CardActions, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Usuario from '../../model/Usuario';
import { TokenState } from '../../store/tokens/tokensReducer';
import { buscaId, post } from '../../service/Service';
import './Perfil.css'
import { Link } from 'react-router-dom';

function Perfil() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: {Authorization: token}
    })
  }

  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
      <Container>

      <img src={usuario.foto} alt="" className='imgPerfil' />
      <Typography className='west' variant='h5' align='center' >{usuario.nome}</Typography>

        <div className='perfilContainer'>
          <Grid xs={3} alignItems='center' justifyContent='center' className='perfil'></Grid>
          <Grid xs={9} justifyContent='center' className='perfil'></Grid>
        </div>

        <Grid className='posts'>
        <div className="postUser">
            {usuario.postagem?.map((post) => (
              <Box m={2} key={post.id} display="flex" flexWrap="wrap" justifyContent="center">
              <div className="postPerfil">
                <strong>{post.tema?.descricao}</strong>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image={post.texto}/>
                <h3>{post.titulo}</h3>

                <Box display="flex" justifyContent="space-around" mb={1.5} marginTop={4}>

                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                          <Box mx={1}>
                            <Button variant="outlined" size='small' className='deletar'>
                              excluir
                            </Button>
                          </Box>
                    </Link>

                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="outlined" size='small' className='atualizar'>
                          atualizar
                        </Button>
                      </Box>
                    </Link>

                </Box>

              </div>
              </Box>
            ))}
        </div>
        </Grid>          

      </Container>
    </>
  );
}

export default Perfil;