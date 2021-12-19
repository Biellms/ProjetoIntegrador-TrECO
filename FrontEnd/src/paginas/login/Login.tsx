import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button, styled, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

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
    const dispatch = useDispatch()
    const [token, setToken] = useState('');

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
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login('/usuarios/logar', userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados inconsistentes. Favor verificar as informações de login!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }

    return (
        <Box className='container-login'>
            <Paper elevation={15} className='paperStyle-login'>
                <form onSubmit={onSubmit}>
                    <Box>
                        <img src="https://i.imgur.com/Hch416C.png" alt="logo" className='img' />
                    </Box>
                    <Box className='box-login'>
                        <Typography variant='h5' align='center' className='loginText'>
                            Login
                        </Typography>
                        <CssTextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <CssTextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    </Box>
                    <Box className='btn'>
                        <Button type='submit' fullWidth variant="contained" className="button">
                            Login
                        </Button>
                    </Box>
                </form>
                <Box>
                    <Typography variant='subtitle1' gutterBottom align='center' className='font'>Não tem uma conta?
                        <Link to='/cadastro' className='login-link-cadastro'>
                            Cadastre-se
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}

export default Login;