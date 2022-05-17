import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./Cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <Typography
        variant="h3"
        marginBottom={3}
        component="span"
        sx={{ marginRight: 5 }}
      >
        Cart
      </Typography>
      <Typography variant="h3" component="span" sx={{ marginTop: 2 }}>
        Total Amount: {cart.totalAmount}
      </Typography>
      <Grid container spacing={3}>
        {cart.items.map((el) => (
          <>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <Box>
                      <img alt="" src={el.image} className={classes.img} />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h4" component="h3" textAlign="center">
                      {el.name}
                    </Typography>
                    <hr />
                    <Box sx={{ marginLeft: 2 }}>
                      <Typography variant="h6" component="h3">
                        Amount: {el.amt} &nbsp; &nbsp; &nbsp; &nbsp; Price:{" "}
                        {el.price}
                      </Typography>
                      <Box
                        sx={{
                          width: 0.5,
                          display: "flex",
                          marginTop: 2,
                        }}
                      >
                        <span>
                          <Typography variant="body1" component="h3">
                            Add Or Remove From Cart
                          </Typography>
                        </span>
                        <Button
                          color="success"
                          size="medium"
                          variant="outlined"
                        >
                          <AddIcon color="success" />
                        </Button>
                        <Button size="medium" variant="outlined">
                          <RemoveIcon color="danger" />
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </>
        ))}

        <Button fullWidth>Buy Now</Button>
      </Grid>
    </Container>
  );
};

export default Cart;
