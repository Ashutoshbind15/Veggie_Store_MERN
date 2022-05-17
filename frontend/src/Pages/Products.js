import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import CardC from "../components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h3" component="h4" marginBottom={2}>
        Shop Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((el) => (
          <Grid item xs={12} sm={6} md={4} key={el._id}>
            <CardC
              id={el._id}
              name={el.name}
              price={el.price}
              description={el.description}
              qty={el.qty}
              img={el.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;

/*  */
