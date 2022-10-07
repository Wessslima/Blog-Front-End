import React, { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import './ListaPostagem.css';
import Postagem from '../../../model/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../service/Service';

function ListaPostagem() {

    let navigate = useNavigate()
    const [posts, setPosts] = useState<Postagem[]> ([])
    const [token, setToken] = useLocalStorage('token')

    useEffect(() => {
        if(token == '') {
            alert('Faça o Login Primeiro')
            navigate('/login')
        }
    }, [token])


    async function getPosts() {
        await busca('/posts', setPosts,{
            headers:{
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getPosts()
    }, [posts.length])



    return (
        <>

        {
            posts.map(post =>(

            <Box m={2}>

                <Card variant='outlined'>

                    <CardContent>

                        <Typography color='textSecondary' gutterBottom>
                            Postagens
                        </Typography>

                        <Typography variant='h5' component='h2'>
                            {post.titulo}
                        </Typography>

                        <Typography variant='body2' component='p'>
                            {post.texto}
                        </Typography>

                        <Typography variant='body2' component='p'>
                            {post.tema?.descricao}
                        </Typography>

                    </CardContent>



                    <CardActions>

                        <Box display='flex' justifyContent='center' mb={1.5}>

                            <Link to={`formularioPostagem/${post.id}`} className='atualizar-Posts'>
                                    <Button variant='contained' size='small' color='primary'>
                                        Atualizar
                                    </Button>
                            </Link>

                            <Link to={`deletarPostagem/${post.id}`} className='deletar-Posts'>
                                    <Button variant='contained' size='small' color='secondary'>
                                        Deletar
                                    </Button>
                            </Link>

                        </Box>

                    </CardActions>

                </Card>

            </Box>

        ))

        }

        </>
    );
}

export default ListaPostagem;