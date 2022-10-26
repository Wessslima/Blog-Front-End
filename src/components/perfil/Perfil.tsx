import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Usuario from '../../model/Usuario';
import { TokenState } from '../../store/tokens/tokensReducer';
import { buscaId } from '../../service/Service';
import './Perfil.css'

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
              <div className="postPerfil">
                <h3>{post.titulo}</h3>
                <p>{post.texto}</p>
                <strong>{post.tema?.descricao}</strong>
              </div>
            ))}
        </div>

            <iframe className='video'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/KVMwBlaqB5Y" 
                title="YouTube video player" 
                frameBorder="8" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>  
            </Grid>          

      </Container>
    </>
  );
}

export default Perfil;