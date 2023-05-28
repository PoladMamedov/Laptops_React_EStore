import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: {
    open: false,
    isRemoving: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.isRemoving = action.payload ? true : false;
    },
    closeModal: (state, action) => {
      state.open = false;
      state.isRemoving = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
