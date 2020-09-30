import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/Context';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import styles from './Cart.module.css';


interface cartType {
    id: number,
    name: string,
    price: number,
    image: string
}
const Cart = () => {

    let { cartItems, removeFromCart } = useContext(CartContext);
    
    const removeCart = (id: number) => {
        removeFromCart(id)
    }
    return (
        <div>
            <Grid container spacing={3} className={styles.CartBox}>
                <Grid item md={4} xs={8}>
                    <h1>Item</h1>
                </Grid>
                <Grid item xs={4}>
                    <h1>Price</h1>
                </Grid>
            </Grid>

                {cartItems.map((item: cartType, index: number) => (
                    < Grid container spacing={3} key={index} className={styles.CartProduct} >
                        <Grid item md={4} xs={8} className={styles.CartItem}>
                            <span><img className={styles.cartImg} src={item.image} alt={item.name} /></span>
                            <span><h2 className={styles.Name}>{item.name}</h2></span>
                        </Grid>
                        <Grid item xs={4}>
                            <h2>$ {item.price}</h2>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <button className={styles.Remove} onClick={() => {
                                removeCart(item.id)
                            }}>Remove from Cart</button>
                        </Grid>
                    </ Grid>
                ))}

        </div>
    )
}

export default Cart
