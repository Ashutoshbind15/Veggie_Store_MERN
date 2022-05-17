import React, { useState } from "react";
import { Paper, Box, Typography, Button, Input } from "@mui/material";
import classes from "./Card.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reducers/cart";
import { Link } from "react-router-dom";

const CardC = (props) => {
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        price: props.price,
        amt,
        id: props.id,
        name: props.name,
        image: props.img,
      })
    );
  };

  const amountChangeHandler = (e) => {
    setAmt(e.target.value);
  };

  return (
    <Paper elevation={3}>
      <img src={props.img} alt="" className={classes.img} />
      <Box sx={{ marginX: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" component="h3">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h3">
            ${props.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 1,
            marginBotton: 2,
          }}
        >
          <Box sx={{ marginX: 1 }}>
            <Input
              type="number"
              placeholder="Add to Cart"
              variant="outlined"
              value={amt}
              onChange={amountChangeHandler}
            />
          </Box>
          <Button variant="contained" size="small" onClick={addToCartHandler}>
            Add
          </Button>
        </Box>
        <Box textAlign="center">
          <Button variant="outlined" color="success">
            <Link to={`/products/${props.id}`} sx={{}}>
              View Product
            </Link>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardC;

/* <div className={classes.card}>
      <div className={classes.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={classes.des}>
        <h4>{props.name}</h4>
        <span>Price: {props.price}</span>
        <span>quantity: {props.qty}</span>
        <button>+1</button>
        <hr />
        <p>{props.description}</p>
      </div>
    </div> */
