import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/products";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";

const store = configureStore({
  reducer: {
    store: productReducer,
    cart: cartReducer,
    auth: userReducer,
  },
});

export default store;
