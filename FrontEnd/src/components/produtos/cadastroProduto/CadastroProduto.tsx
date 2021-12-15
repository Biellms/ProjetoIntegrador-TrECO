import { Box, Button, Card, CardContent, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroProduto() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    // Efeito para validar a entrada na pagina
    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            nomeCategoria: '',
            descricao: '',
            Boolean: null
        })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomeProduto: '',
        descricao: '',
        preco: 0,
        imagem: ''
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    // Função para pegar a categoria
    async function getCategorias() {
        await busca('/categorias', setCategorias, {
            headers: { 'Authorization': token }
        })
    }

    // Função para pegar o produto por ID
    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: { 'Authorization': token }
        })
    }

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizada com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrada com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        history.push('/home')
    }

    return (
        <Box display='flex' justifyContent='center'>
            <Box width={'37%'} margin={25} className='box-atualizar-produto'>
                <Card variant="outlined" className='card-atualizar'>
                    <CardContent>
                        <Container maxWidth="sm" className="topo">
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='text-bold'>Formulário de cadastro produto</Typography>
                                <Box marginTop={5}>
                                    <TextField value={produto.nomeProduto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nomeProduto" label="Nome do Produto" variant="outlined" name="nomeProduto" margin="normal" fullWidth />
                                    <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                                    <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" variant="outlined" name="preco" margin="normal" fullWidth />
                                    <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="imagem" label="Imagem" name="imagem" variant="outlined" margin="normal" fullWidth />
                                </Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label" className='label'>Categoria </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                            headers: {
                                                'Authorization': token
                                            }
                                        })}>
                                        {
                                            categorias.map(categoria => (
                                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <FormHelperText className='helper'>Escolha uma categoria para o produto</FormHelperText>
                                    <Button type="submit" variant="contained" color="primary" className='botao-finalizar'>
                                        Finalizar
                                    </Button>
                                </FormControl>
                            </form>
                        </Container>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default CadastroProduto;
