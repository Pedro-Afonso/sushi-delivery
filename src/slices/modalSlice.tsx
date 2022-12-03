import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProduct: {
    isVisible: false,
    product: null,
  },
  updateProduct: {
    isVisible: false,
    product: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAddProduct: (state, action) => {
      state.addProduct.isVisible = !state.addProduct.isVisible;
      state.addProduct.product = action.payload;
    },
    toggleUpdateProduct: (state, action) => {
      state.updateProduct.isVisible = !state.updateProduct.isVisible;
      state.updateProduct.product = action.payload;
    },
  },
});

export const { toggleAddProduct, toggleUpdateProduct } = modalSlice.actions;

export default modalSlice.reducer;
