import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Somos a Treco!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">
                            <p>
                                Bem vindos ao Ecommerce mais sustentável e descolado que você já viu!
                                Onde, além de comprar, você também poderá vender seus produtos.
                            </p>
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
                <Grid item xs={5} >
                    <img src="https://i.imgur.com/xJwojLF.png" alt="" width="500px" height="500px" className='imagem2' />
                </Grid>
                <Grid item xs={7}>
                    <Box paddingX={2} >

                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo2'>
                            Compre e venda produtos que não agridem o meio ambiente, e tenha uma nova renda, além de contribuir com o planeta.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">
                            <p className='texto2'>
                                A TrECO (Trabalho Reponsável Ecológico) é uma plataforma de
                                e-commerce com o objetivo de vender produtos entre a
                                comunidade, criados pelos próprios moradores, se tornando um
                                ecossistema, e apoianda nas relações econômicas, sociais e
                                ambientais nas comunidades de forma extremamente positiva.

                            </p>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao2'>Cadastre-se</Button>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default Home;