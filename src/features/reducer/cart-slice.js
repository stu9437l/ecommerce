import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cart.unshift(action.payload);
    },
    remove(state, action) {
      return state.cart.filter((item) => 
        item.id !== action.payload
      );
    },
  },
});
export const cart = (state) => state.cart;
export const { add, remove } = cartSLice.actions;
export default cartSLice.reducer;
