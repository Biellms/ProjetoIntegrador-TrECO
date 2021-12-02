import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <Grid justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12}>
                <Box paddingX={50} margin={13}>
                    <form>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Login</Typography>
                        <TextField id='seuemail' label='seuemail@gmail.com' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={3} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button className='buttom' fullWidth>
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={1}>
                    <Typography variant='subtitle1' gutterBottom align='center' className='font' >Esqueceu a senha?</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center' marginTop={5}>
                        <Box marginRight={1} display='flex' justifyContent='center'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='font'>Não tem uma conta?</Typography>
                        </Box >
                        <Link to='/cadastro' className='text-decorator-none'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='login-link-cadastro'>Cadastre-se</Typography>
                        </Link>                           
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;