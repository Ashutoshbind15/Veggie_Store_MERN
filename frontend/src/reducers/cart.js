import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  number: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const amount = +action.payload.amt;
      state.totalAmount = state.totalAmount + action.payload.price * amount;
      const indexOfItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfItem < 0) {
        state.items.push({ ...action.payload, amt: amount });
      } else {
        state.items[indexOfItem].amt += amount;
      }
      state.number += amount;
    },
  },
  removeItem(state, action) {},
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
