import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    
    addToCart: (state, action) => {
      const item = action.payload;

      const exist = state.cartItems.find((x) => x.id === item.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (x) => x.id === action.payload
      );
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (x) => x.id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (x) => x.id !== action.payload
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;