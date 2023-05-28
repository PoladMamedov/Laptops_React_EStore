import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const items = await fetch("items.json").then((res) => res.json());
  return items;
});

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default itemsSlice.reducer;
