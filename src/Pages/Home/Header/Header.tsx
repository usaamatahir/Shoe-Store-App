import React from 'react';
import styles from './Header.module.css';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"; 


const Header = () => {
    return (
        <div className={styles.header}>
            <Grid container>
                <Grid item md={6} xs={12} className={styles.headerContent} >
                    <h1>Welcome to shoe store</h1>
                    <Link to="/products">Shop now</Link>
                    
                </Grid>
                <Grid item md={6} xs={12}></Grid>
            </Grid>
        </div>
    )
}

export default Header;
