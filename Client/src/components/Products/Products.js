import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import makeStyles from "./styles";
import axios from "axios";

const Products = ({ products, onAddToCart }) => {
  const classes = makeStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
