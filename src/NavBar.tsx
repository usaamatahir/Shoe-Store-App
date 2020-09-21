import React, { useContext, useRef } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Slide,
    Badge
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from './Context/Context';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavBar(props: Props) {

    let display = false;
    const show = useRef(null);
    function handleNav() {

        if (display === false) {
            //@ts-ignore
            show.current.style.right = '0';
            //@ts-ignore
            show.current.style.top = '0';
            display = true;
        }   
        else if (!display === false) {
            //@ts-ignore
            show.current.style.right = '-100%';
            //@ts-ignore
            show.current.style.top = '-100%';
            display = false;
        }   
    }

    const navigationDisplay = () => {
        //@ts-ignore
        show.current.style.right = '-100%';
        //@ts-ignore
        show.current.style.top = '-100%'
        display = false;
    }

    let { cartItems } = useContext(CartContext);

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={styles.navBar}>
                        <Typography variant="h6">Shoe Store</Typography>
                        <div className={styles.navigation}>
                            <nav className={styles.link} ref={show} >
                                <Link className={styles.linkStyling} to="/" onClick={navigationDisplay} >
                                    Home
                                </Link>
                                <Link className={styles.linkStyling} to="/products" onClick={navigationDisplay} >
                                    Products
                                </Link>
                            </nav>
                            <div className={styles.cart}>
                                <Link className={styles.linkStyling} to="/cart" onClick={navigationDisplay} >
                                <Badge badgeContent={cartItems.length} color="secondary">
                                    <AddShoppingCartIcon />
                                </Badge>
                                </Link>
                            </div>
                            <div className={styles.toggleBtn}>
                                <MenuIcon onClick={handleNav} className={styles.toggleBtn}  />
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}

export default NavBar;
