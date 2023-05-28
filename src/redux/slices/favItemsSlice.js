import { createSlice } from "@reduxjs/toolkit";

const favItemsSlice = createSlice({
  name: "favItems",
  initialState: [],
  reducers: {
    setFavItems: (state, action) => {
      return action.payload;
    },
    addToFav: (state, action) => {
      state.push(action.payload);
    },
    removeFromFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setFavItems, addToFav, removeFromFav } = favItemsSlice.actions;

export default favItemsSlice.reducer;
