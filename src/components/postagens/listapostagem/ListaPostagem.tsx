import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Postagem from '../../../model/Postagem';
import { busca } from '../../../service/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Grid } from '@material-ui/core';


function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>

    <Grid className='explorar'>

      {
        posts.map(post => (

          <Box m={2} key={post.id} display="flex" flexWrap="wrap" justifyContent="center">

            <Card variant="outlined" className='margin'>

              <CardContent>

              <Typography variant="body2" component="p" className='by'>
                  @{post.usuario?.nome}
                </Typography>

                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>

                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image={post.texto}/>

                <Typography variant="h6" component="p">
                  {post.titulo}
                </Typography>

              </CardContent>
              
            </Card>
          </Box>
        ))
      }
      </Grid>
    </>
  )
}

export default ListaPostagem;