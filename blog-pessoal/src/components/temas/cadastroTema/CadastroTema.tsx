import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../model/Tema';
import { buscaId, post, put } from '../../../service/Service';
import { Box } from '@material-ui/core';


function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
            'Authorization': token
            }
        })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema" + JSON.stringify(tema))
    
            if (id !== undefined) {
                // console.log(tema)
                try{ 
                    await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
                navigate('/temas')
            } catch(error) {
                alert('Falha na atualização, verifique os campos')
            }
        } else {
            try{
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
                navigate('/temas')
            } catch (error) {
                alert('Falha na criação do tema, verifique os campos')
            }
        }
    }



    return (

        <Container maxWidth="sm" className="formTema">

            <form onSubmit={onSubmit}>

                <Typography 
                className='cadastrarTema'
                variant="h3"
                component="h1" 
                align="center" >Cadastrar Tema
                </Typography>


                <TextField 
                className='bg-FormTema'
                value={tema.descricao} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                id="descricao" 
                label="Insira um Tema" 
                variant="filled" 
                name="descricao" 
                margin="normal" 
                fullWidth />

                <Button disabled={tema.descricao == ""} className='bt-Finalizar' type="submit" variant="contained" color='secondary'>
                    Cadastrar
                </Button>

            </form>

        </Container>
    )
}

export default CadastroTema;