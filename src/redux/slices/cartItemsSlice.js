import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    setCartItems: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const itemToAdd = state.find((item) => item.id === action.payload.id);
      if (itemToAdd) {
        itemToAdd.amount++;
        state = state.filter((item) => item.id !== itemToAdd.id);
        state.push(itemToAdd);
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    decreaseAmount: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.amount--;
      state = state.filter((item) => item.id !== action.payload);
      state.push(item);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { setCartItems, addToCart, decreaseAmount, removeFromCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
