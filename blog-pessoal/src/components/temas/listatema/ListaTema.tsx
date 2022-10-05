import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import './ListaTema.css';

function ListaTema() {
    return (
        <>

            <Box m={2} >

                <Card variant='outlined'>

                    <CardContent>

                        <Typography color='textSecondary' gutterBottom>
                            Tema
                        </Typography>

                        <Typography variant='h5' component='h2'>
                            Minha Descrição
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

export default ListaTema;