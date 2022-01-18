import React, { useState } from "react";
import { Box, Button, Divider, Drawer, Fade, IconButton, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import './Drawer.css';
import MenuIcon from "@material-ui/icons/Menu";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "black"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
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

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                className='estilizanav'
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/home" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/produtos" className={classes.link}>Produtos</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/categorias" className={classes.link}>Categorias</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/equipe" className={classes.link}>Equipe</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/sobre" className={classes.link}>Sobre</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText>
                            <Button
                                className='cad-button'
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <a className='teste2'>Cadastros </a>
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
                                    <MenuItem onClick={() => setOpenDrawer(false)} >Produto</MenuItem>
                                </Link>
                                <Link to='/formularioCategoria' className='text-decorator-none box-cadastro'>
                                    <MenuItem onClick={() => setOpenDrawer(false)}>Categoria</MenuItem>
                                </Link>
                                <Link to='/sobre' className='text-decorator-none box-cadastro'>
                                    <MenuItem onClick={() => setOpenDrawer(false)} >Saiba Mais</MenuItem>
                                </Link>
                            </Menu>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={goLogout}>
                        <ListItemText>
                            <Link to="/login" className={classes.link}>Sair</Link>
                        </ListItemText>
                    </ListItem>

                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
