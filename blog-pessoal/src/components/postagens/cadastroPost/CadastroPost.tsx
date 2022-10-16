import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@mui/material"
import './CadastroPost.css';
import {useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../model/Tema';
import Postagem from '../../../model/Postagem';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Usuario from '../../../model/Usuario';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const userId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })


        const [usuario, setUsuario] = useState<Usuario>({
            id: +userId,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })


    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
        usuario: null                                                                              
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        });
    }, [tema]);

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try{ 
                await put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token,
                },
            });
            toast.success('Postagem Atualizada', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Erro na atualização, verifique se os campos foram preenchidos corretamente', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }else{
        try{ 
            await post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token,
                },
            });
            toast.success('Postagem Cadastrada', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Erro ao cadastrar, verifique se os campos foram preenchidos corretamente', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
        navigate('/postagens')
    }

    return (
        <Container maxWidth="sm" className="topo">

            <form onSubmit={onSubmit}>

                <Typography 
                className='newPost'
                variant="h3" 
                component="h1" 
                align="center" >New Post
                </Typography>


                <TextField 
                value={postagem.titulo} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} 
                id="titulo" 
                label="Título" 
                variant="outlined" 
                name="titulo" 
                margin="normal" 
                fullWidth />


                <TextField 
                value={postagem.texto} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} 
                id="texto" 
                label="Texto" 
                name="texto" 
                variant="outlined" 
                margin="normal" 
                fullWidth />


                <FormControl className='tema' >

                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>


                    {/* <FormHelperText>Escolha um tema para a postagem</FormHelperText> */}
                    <Button disabled={tema.id == 0} className='bt-Finalizar' type="submit" variant="contained" color="secondary">
                        Postar
                    </Button>

                </FormControl>

            </form>
            
        </Container>
    )
}
export default CadastroPost;