import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button, styled } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#70A25C',
    },
    '& .MuiFormLabel-root': {
        color: '#70A25C',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInputBase-input': {
        color: '#70A25C',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'green',
        },
        '&:hover fieldset': {
            borderColor: '#70A25C',
            boxShadow: '2px 2px 2px #70A25C',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
            boxShadow: '2px 2px 2px black',
        },
    },
});

function Login() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login('usuarios/logar', userLogin, setToken)
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }

    return (
        <Grid justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12}>
                <Box justifyContent='center' display='flex'>
                    <Box width={'50%'} margin={13}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Login</Typography>
                            <CssTextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <CssTextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={3} textAlign='center'>
                                <Button type='submit' className='buttom' fullWidth>
                                    Login
                                </Button>
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
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;