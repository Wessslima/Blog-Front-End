import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import './ListaPostagem.css';

function ListaPostagem() {
    return (
        <>

            <Box m={2}>

                <Card variant='outlined'>

                    <CardContent>

                        <Typography color='textSecondary' gutterBottom>
                            Postagens
                        </Typography>

                        <Typography variant='h5' component='h2'>
                            Título
                        </Typography>

                        <Typography variant='body2' component='p'>
                            Texto da Postagem
                        </Typography>

                        <Typography variant='body2' component='p'>
                            Tema
                        </Typography>

                    </CardContent>



                    <CardActions>

                        <Box>

                            <Link to='' className='text-decorator-none'>
                                    <Button variant='contained' size='small' color='primary'>
                                        Atualizar
                                    </Button>
                            </Link>

                            <Link to='' className='delete'>
                                    <Button variant='contained' size='small' color='secondary'>
                                        Deletar
                                    </Button>
                            </Link>

                        </Box>

                    </CardActions>

                </Card>

            </Box>

        </>
    );
}

export default ListaPostagem;