import React from 'react';
import styles from './Header.module.css';
import Grid from '@material-ui/core/Grid';


const Header = () => {
    return (
        <div className={styles.header}>
            <Grid container>
                <Grid item md={6} xs={12} className={styles.headerContent} >
                    <h1>Welcome to shoe store</h1>
                    <a href="./products">Shop now</a>
                    
                </Grid>
                <Grid item md={6} xs={12}></Grid>
            </Grid>
        </div>
    )
}

export default Header;
