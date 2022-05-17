import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  user: user ? user : null,
  isError: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
