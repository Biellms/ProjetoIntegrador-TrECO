import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {

    return (
        <Grid justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12}>
                <Box paddingX={50} margin={8}>
                    <form>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Criar Nova Conta</Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='noem' margin='normal' fullWidth />
                        <TextField id='seuemail' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth />
                        <TextField id='confirmarsenha' label='Confirmar Senha' variant='outlined' name='confirmaremail' margin='normal' fullWidth />
                        <TextField id='telefone' label='Telefone' variant='outlined' name='telefone' margin='normal' type='password'fullWidth />
                        <Box>
                            <h1 className='font'>
                            Ao clicar em cadastrar, você concorda com nossos 
                            Termos e Politica de Dados.
                            </h1>
                        </Box>
                        <Box marginTop={3} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button className='buttom' fullWidth>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={5}>
                        <Box marginRight={1} display='flex' justifyContent='center'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='font'>Ou faça Login com:</Typography>
                        </Box >                         
                    </Box>
                    <Box display= 'flex' justifyContent='end' marginTop={5}>
                        <Link to='/login' className='text-decorator-none'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='login' >Login</Typography>
                        </Link>                               
                        </Box> 
                </Box>
            </Grid>
        </Grid>
    );
}

export default Cadastro;