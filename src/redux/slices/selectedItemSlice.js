import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState: null,
  reducers: {
    setSelectedItem: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
