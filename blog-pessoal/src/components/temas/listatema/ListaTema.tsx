import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import './ListaTema.css';
import Tema from '../../../model/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../service/Service';

function ListaTema() {

    let navigate = useNavigate()
    const [temas, setTemas] = useState<Tema[]> ([])
    const [token, setToken] = useLocalStorage('token')

    useEffect(() => {
        if(token == '') {
            alert('Faça o Login Primeiro')
            navigate('/login')
        }
    }, [token])


    async function getTema() {
        await busca('/tema', setTemas,{
            headers:{
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])
    
    

    return (
        <>

        {
            temas.map(tema =>(

            <Box m={2} >

                <Card variant='outlined'>

                    <CardContent>

                        <Typography color='textSecondary' gutterBottom>
                            Tema
                        </Typography>

                        <Typography variant='h5' component='h2'>
                            {tema.descricao}
                        </Typography>

                    </CardContent>



                    <CardActions>

                        <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to={`formularioTema/${tema.id}`} className='atualizar-Tema'>
                                    <Button variant='contained' size='small' color='primary'>
                                        Atualizar
                                    </Button>
                            </Link>

                            <Link to={`deletarTema/${tema.id}`} className='deletar-Tema'>
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

export default ListaTema;