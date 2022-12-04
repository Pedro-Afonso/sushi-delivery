import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/interface";

interface IState {
  [x: string]: {
    isVisible: boolean;
    product: IProduct | null;
  };
}

const initialState: IState = {
  addProduct: {
    isVisible: false,
    product: null,
  },
  updateProduct: {
    isVisible: false,
    product: null,
  },
  removeProduct: {
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
    toggleRemoveProduct: (state, action) => {
      state.removeProduct.isVisible = !state.removeProduct.isVisible;
      state.removeProduct.product = action.payload;
    },
  },
});

export const { toggleAddProduct, toggleUpdateProduct, toggleRemoveProduct } =
  modalSlice.actions;

export default modalSlice.reducer;
