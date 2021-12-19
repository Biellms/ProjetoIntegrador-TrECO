import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import './Equipe.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Equipe() {
    return (
        <>
            <Grid className='container-titulo-equipe'>
                <Typography variant="h4" color="initial" className='titulo-equipe'>Nossa Equipe</Typography>
            </Grid>
            <Grid className='container-equipe'>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/GtT81Yu.png"
                        alt="deivide"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Deivide Joaquim
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Sou Deivide Joaquim biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Dejsilva" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/deivide-silva-748175213/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/S0EGvAp.jpg"
                        alt="jeffrey"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Jeffrey Rodrigues
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Sou Jeffrey Rodrigues biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/JeffreyRodriigues" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/jeffreyrodrigues/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/YNWcMQq.jpg"
                        alt="gabriel"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Gabriel Mendes
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Sou Gabriel Mendes biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Biellms" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/yLO6JBC.jpg"
                        alt="lucas"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Lucas Bernardino
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Sou Lucas Bernardino biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/LucasIluminado" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/lucasdevsousa/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/Uubnybs.png"
                        alt="milton"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Milton Viegas
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Sou Milton Viegas biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru biruliru
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Milton-Viegas" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/milton-viegas-849655b0/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}