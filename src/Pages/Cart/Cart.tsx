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

    let { cartItems } = useContext(CartContext);

    let [quantity, setQuantity] = useState(1);


    const Increase = () => {
        quantity += 1;
        setQuantity(quantity);
    }

    const Decrease = () => {
        if (quantity === 1) {
            return
        }

        quantity -= 1;
        setQuantity(quantity);
    }

    return (
        <div>
            <Grid container spacing={3} className={styles.CartBox}>
                <Grid item xs={5}>
                    <h1>Item</h1>
                </Grid>
                <Grid item xs={3}>
                    <h1>Price</h1>
                </Grid>
                <Grid item xs={4}>
                    <h1>Quantity</h1>
                </Grid>
            </Grid>

                {cartItems.map((item: cartType) => (
                    < Grid container >
                        <Grid item xs={5}>
                            <Grid container className={styles.cartItem}>
                                <Grid item xs={8}><img className={styles.cartImg} src={item.image} alt={item.name} /></Grid>
                                <Grid item xs={4}><h2>{item.name}</h2></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <h2>$ {item.price * quantity}</h2>
                        </Grid>
                        <Grid item xs={4} className={styles.Quantity}>
                            <button onClick={Decrease}><RemoveIcon></RemoveIcon></button>
                            <h2>{quantity}</h2>
                            <button onClick={Increase}><AddIcon></AddIcon></button>
                        </Grid>
                    </ Grid>
                ))}

        </div>
    )
}

export default Cart
