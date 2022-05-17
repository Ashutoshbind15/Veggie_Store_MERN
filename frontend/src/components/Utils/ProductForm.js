import {
  Container,
  Input,
  Paper,
  Box,
  InputLabel,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../../actions/products";
import classes from "./ProductForm.module.css";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    qty: "",
    description: "",
    image: "",
  });
  const user = useSelector((state) => state.auth.user.token);

  const submissionHandler = (e) => {
    e.preventDefault();

    const productdata = {
      ...productData,
      image: "https://source.unsplash.com/collection/2073547",
    };
    dispatch(createProducts({ productdata, user }));
    navigate("/products");
  };

  const onChangeHandler = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <Paper variant="outlined">
        <form className={classes.form} action="" onSubmit={submissionHandler}>
          <Box sx={{ width: 0.8, marginBottom: 2 }}>
            <InputLabel htmlFor="name" sx={{ display: "inline" }}>
              <Typography variant="h5" component="span">
                Name:
              </Typography>
            </InputLabel>
            <Input
              fullWidth
              type="text"
              name="name"
              id="name"
              onChange={onChangeHandler}
            />
          </Box>
          <Box sx={{ width: 0.8, marginBottom: 2 }}>
            <InputLabel htmlFor="price" sx={{ display: "inline" }}>
              <Typography variant="h5" component="span">
                Price:
              </Typography>
            </InputLabel>
            <Input
              fullWidth
              type="number"
              name="price"
              id="price"
              onChange={onChangeHandler}
            />
          </Box>
          <Box sx={{ width: 0.8, marginBottom: 2 }}>
            <InputLabel htmlFor="qty" sx={{ display: "inline" }}>
              <Typography variant="h5" component="span">
                Quantity:
              </Typography>
            </InputLabel>
            <Input
              fullWidth
              type="number"
              name="qty"
              id="qty"
              value={productData.qty}
              onChange={onChangeHandler}
            />
          </Box>
          <Box sx={{ width: 0.8, marginBottom: 2 }}>
            <InputLabel htmlFor="desc">
              <Typography variant="h5" component="span">
                Description:
              </Typography>
            </InputLabel>
            <TextField
              sx={{ width: 0.8 }}
              id="desc"
              name="description"
              value={productData.description}
              onChange={onChangeHandler}
            />
          </Box>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ProductForm;
