import React from 'react';
import { AppBar, Toolbar, Typography, Box, useTheme, useMediaQuery, CssBaseline, makeStyles, Button, Menu, MenuItem, Fade } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import DrawerComponent from "./Drawer";
import { width } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(3),
    display: "flex",
    height: "1.5cm",
    width: "100wv"

  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory()
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined,
    });
    history.push('/login')
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  let navbarComponent;

  if (token != '') {
    navbarComponent =
      <AppBar position="static" >
        <CssBaseline />
        <Toolbar variant="dense" className='appbar'>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to='/home'>
                <Box className='pointerimage'>
                  <img src="https://i.imgur.com/Hch416C.png" alt="" width="" height="200px" />
                </Box>
              </Link>
              <Box display="flex" justifyContent="flex-start">
                <Link to='/home' className='text-decorator-none'>
                  <Box mx={1} className='pointer'>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Home
                    </Typography>
                  </Box>
                </Link>
                <Link to='/produtos' className='text-decorator-none'>
                  <Box mx={1} className='pointer'>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Produtos
                    </Typography>
                  </Box>
                </Link>
                <Link to='/categorias' className='text-decorator-none'>
                  <Box mx={1} className='pointer'>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Categorias
                    </Typography>
                  </Box>
                </Link>
                <Link to='/equipe' className='text-decorator-none'>
                  <Box mx={1} className='pointer'>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Equipe
                    </Typography>
                  </Box>
                </Link>
                <Link to='/sobre' className='text-decorator-none'>
                  <Box mx={1} className='pointer'>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Sobre
                    </Typography>
                  </Box>
                </Link>
                <Box mx={1} className='pointer2'>
                  <Button
                    className='cad-button'
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <a className='teste'>Cadastros </a>
                  </Button>
                  <Menu
                    className='menu1'
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <Link to='/formularioProduto' className='text-decorator-none box-cadastro'>
                      <MenuItem onClick={handleClose}>Produto</MenuItem>
                    </Link>
                    <Link to='/formularioCategoria' className='text-decorator-none box-cadastro'>
                      <MenuItem onClick={handleClose}>Categoria</MenuItem>
                    </Link>
                    <Link to='/sobre' className='text-decorator-none box-cadastro'>
                      <MenuItem onClick={handleClose} >Saiba Mais</MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </Box>
              <Box className='sair'>
                <Link to='/login' >
                  <Box onClick={goLogout}>
                    <Typography variant="h6" color="inherit" className='txtmenu'>
                      Sair
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </div>
          )}
        </Toolbar>
      </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default NavBar;