import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import './Equipe.css';

export default function Equipe() {
    return (

        <Grid className='container-equipe'>
            <Card className='cartao'>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="Deivide Joaquim"
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
                    <Button size="small">
                        Git Hub
                    </Button>
                    <Button size="small">
                        Linkedin
                    </Button>
                </CardActions>
            </Card>



            <Card className='cartao'>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="Joãozinho"
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
                    <Button size="small">
                        Git Hub
                    </Button>
                    <Button size="small">
                        Linkedin
                    </Button>
                </CardActions>
            </Card>

            <Card className='cartao'>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="Joãozinho"
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
                    <Button size="small">
                        Git Hub
                    </Button>
                    <Button size="small">
                        Linkedin
                    </Button>
                </CardActions>
            </Card>



            <Card className='cartao'>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="Joãozinho"
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
                    <Button size="small">
                        Git Hub
                    </Button>
                    <Button size="small">
                        Linkedin
                    </Button>
                </CardActions>
            </Card>



            <Card className='cartao'>
                <CardMedia
                    component="img"
                    height="200px"
                    image="https://randomuser.me/api/portraits/men/66.jpg"
                    alt="Joãozinho"
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
                    <Button size="small">
                        Git Hub
                    </Button>
                    <Button size="small">
                        Linkedin
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
}