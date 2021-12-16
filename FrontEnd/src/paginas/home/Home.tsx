import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Usuário precisa estar logado!', {
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

    return (
        <>
            <Grid container direction="row" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Somos a Treco!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">
                            Bem vindos ao Ecommerce mais sustentável e descolado que você já viu!
                            Onde, além de comprar, você também poderá vender seus produtos ecológios!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Saiba Mais</Button>
                    </Box>
                </Grid>
            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa2'>
                <Grid item xs={6} >
                    <Box display="flex" justifyContent='center'>
                        <Box>
                            <img src="https://i.imgur.com/xJwojLF.png" alt="" width="700vw" height="700vh" className='imagem2' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box paddingX={12} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                            Compre e venda produtos que não agridem o meio ambiente, e tenha uma nova renda, além de contribuir com o planeta.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">
                            A TrECO (Trabalho Reponsável Ecológico) é uma plataforma de
                            e-commerce com o objetivo de vender produtos entre a
                            comunidade, criados pelos próprios moradores, se tornando um
                            ecossistema, e apoianda nas relações econômicas, sociais e
                            ambientais nas comunidades de forma extremamente positiva.
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent='center' marginTop={3}>
                        <Box mx={2}>
                            <ModalProduto />
                        </Box>
                        <Box mx={2}>
                            <Link to='/produtos' className='text-decorator-none'>
                                <Button variant="outlined" className="botao">
                                    Ver Produtos
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;