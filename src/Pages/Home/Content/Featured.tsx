import React from "react";
import { products } from "../../../Data/data.json";
import {  Card,  CardActionArea,  CardMedia,  CardContent,  CardActions,  Grid } from "@material-ui/core";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <h1>Featured</h1>
      <Grid container className={styles.Cards}>
        {products.slice(0, 3).map((product) => {
          return (
            <Grid item  md={4}  sm={6}  xs={12}  className={styles.Products}  key={product._productId}  >
              <Card className={styles.card}>
                <CardActionArea>
                  <CardMedia  className={styles.productImage}  image={product.image}  title={product.name}  />
                  <CardContent>
                    <Grid container className={styles.content}>
                      <Grid item xs={12}>
                        <h2 className={styles.ProductName}>{product.name}</h2>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Grid container className={styles.content}>
                    <Grid item xs={6}>
                      <h2 className={styles.ProductPrice}>${product.price}</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <button className={styles.cartBtn}>Add to Cart</button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Featured;
