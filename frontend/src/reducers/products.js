import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  isError: null,
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.products.push(action.payload);
    },
    getProduct(state, action) {
      state.product = action.payload;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((el) => el.id !== action.payload);
    },
    editProduct(state, action) {
      const itemToBeUpdated = state.products.findIndex(
        (el) => el.id === action.payload.id
      );
      state.products[itemToBeUpdated] = action.payload.data;
    },
  },
});

export default productSlice.reducer;

export const productActions = productSlice.actions;
