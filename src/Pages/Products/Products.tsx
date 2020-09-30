import React, { useContext, useState } from 'react';
import { products } from '../../Data/data.json';
import { CartContext } from '../../Context/Context';
import { Card, CardMedia, CardContent, Grid } from '@material-ui/core';
import styles from "./Products.module.css";



const Product = () => {

  let [id, setId] = useState(0);
  let [name, setName] = useState('');
  let [price, setPrice] = useState(0);
  let [image, setImage] = useState('');
  


  let { addToCart } = useContext(CartContext);

  function onCartClick(id: number, name: string, image: string, price: number) {

    addToCart({
      id,
      name,
      image,
      price
    })

    setId(id);
    setName(name);
    setPrice(price);
    setImage(image);

    setId(0);
    setName('');
    setPrice(0);
    setImage('');
  }


  return (
    <div className={styles.featured}>
      <h1>Products</h1>
      <Grid container className={styles.Cards}>
        {products.map((product) => (

          <Grid item md={4} sm={6} xs={12} className={styles.Products} key={id = product._productId}  >
            <Card className={styles.card}>

              <CardMedia className={styles.productImage} image={image = product.image} title={product.name} />
              <CardContent>
                <Grid container className={styles.content}>
                  <Grid item xs={12}>
                    <h2 className={styles.ProductName}>{name = product.name}</h2>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid container className={styles.content}>
                <Grid item xs={6}>
                  <h2 className={styles.ProductPrice}>${ price = product.price}</h2>
                </Grid>
                <Grid item xs={6}>
                  <button className={styles.cartBtn} onClick={() => {
                    {
                      onCartClick(product._productId, product.name, product.image, product.price)
                    }
                  }} >Add to Cart</button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Product;
