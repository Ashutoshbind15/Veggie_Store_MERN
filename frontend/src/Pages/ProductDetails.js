import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../actions/products";
import { Container, Typography, Box, Grid, Paper, Button } from "@mui/material";
import classes from "./ProdDetails.module.css";
import Rating from "@mui/material/Rating";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.store.product);

  if (!product) return null;

  return (
    <Container>
      <Typography variant="h3" component="h1" marginBottom={3}>
        {product.name}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper elevation={3}>
            <Box className={classes.img}>
              <img src={product.image} alt="" />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h4">Ratings</Typography>
          <Rating value={4} precision={0.5} size="large" />
          <Typography variant="h5" component="p" className={classes.desc}>
            Description: {product.description}
          </Typography>

          <Typography variant="h4">Price: ${product.price}</Typography>
          <Typography marginBottom={3} variant="h4">
            Available
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button size="large" variant="outlined" color="success" fullWidth>
              <AddShoppingCartIcon />
            </Button>
            <Button size="large" variant="outlined" fullWidth>
              <RemoveShoppingCartIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
