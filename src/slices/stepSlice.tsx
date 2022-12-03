import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../components/interface";

interface IItem {
  product: IProduct;
  quantity: number;
}

interface IState {
  cart: IItem[];
}

const initialState: IState = {
  cart: [],
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    handleSelectProduct: (state, action: PayloadAction<IProduct>) => {
      const hasProduct = state.cart
        .map((item) => item.product.id)
        .includes(action.payload.id);

      if (hasProduct) {
        // Remove product
        state.cart = state.cart.filter(
          (item) => item.product.id !== action.payload.id
        );
      } else {
        // Add product
        state.cart.unshift({ product: action.payload, quantity: 1 });
      }
    },
    handleQuantity: (
      state,
      action: PayloadAction<{ opt: "ADD" | "SUB"; id: string }>
    ) => {
      if (action.payload.opt === "ADD") {
        state.cart = state.cart.map((item) => {
          if (item.product.id !== action.payload.id) return item;

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });
      } else if (action.payload.opt === "SUB") {
        state.cart = state.cart.map((item) => {
          if (item.product.id !== action.payload.id) return item;

          if (item.quantity <= 0) return item;

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        });
      }
    },
  },
});

export const { handleSelectProduct, handleQuantity } = stepSlice.actions;

export default stepSlice.reducer;
