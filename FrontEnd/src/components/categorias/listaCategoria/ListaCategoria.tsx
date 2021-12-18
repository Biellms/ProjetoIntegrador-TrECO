import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, CardActionArea, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import './ListaCategoria.css';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../service/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
    
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

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

    async function getCategoria() {
        await busca('/categorias', setCategorias, {
            headers: {
                'authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>
            <Grid className='container-categoria'>
            {
                categorias.map(categoria => (
                    <Box className='container3'>
                        <Card className="tamanho3">
                        <CardMedia
                    component="img"
                    height="250"
                    image={categoria.imagem}
                    alt="Categoria"
                  />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {categoria.nomeCategoria}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
            </Grid>
        </>
    );
}


export default ListaCategoria;