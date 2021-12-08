import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button, styled } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Cadastro.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';

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
        boxShadow: '2px 2px black',
      },
    },
  });

function Cadastro() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12}>
                <Box justifyContent='center' display='flex'>
                    <Box width={'50%'} margin={13}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Criar Nova Conta</Typography>
                        <CssTextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome'
                            margin='normal' fullWidth />
                        <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usario' label='Usuário' variant='outlined' name='usuario'
                            margin='normal' fullWidth />
                        <CssTextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' type='password'
                            margin='normal' fullWidth />
                        <CssTextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='Confirmar Senha' variant='outlined'
                            type='password' name='confirmarsenha' margin='normal' fullWidth />
                        <Box>
                            <h1 className='font'>
                                Ao clicar em cadastrar, você concorda com nossos
                                Termos e Politica de Dados.
                            </h1>
                        </Box>
                        <Box marginTop={3} textAlign='center'>
                            <Button type='submit' className='buttom' fullWidth>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={1}>
                        <Box marginRight={1} display='flex' justifyContent='center'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='font'>Ou faça Login com:</Typography>
                        </Box >
                    </Box>
                    <Box display='flex' justifyContent='end' marginTop={5}>
                        <Link to='/login' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='login' >Login</Typography>
                        </Link>
                    </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Cadastro;