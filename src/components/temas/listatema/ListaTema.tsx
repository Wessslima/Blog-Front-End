import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import Tema from '../../../model/Tema';
import './ListaTema.css';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
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


  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(

      <Box m={2} key={tema.id} display="flex" flexWrap="wrap" justifyContent="center" marginTop={5}>

        <Card variant="outlined" className='margini'>
          <CardContent>

            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>

            <Typography variant="h5" component="h2">
            {tema.descricao}
            </Typography>
          </CardContent>


          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="outlined" size='small' className='deletarTema'>
                    excluir
                  </Button>
                </Box>
              </Link>

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="outlined" size='small' className='atualizarTema'>
                    atualizar
                  </Button>
                </Box>
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