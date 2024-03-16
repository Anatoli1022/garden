import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BasketState,
  myData,
  IncreaseQuantityPayload,
  DecreaseQuantityPayload,
  RemoveItemPayload,
} from '../../types';

const initialState: BasketState = {
  products: [],
};

const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setAddItem: (state, action: PayloadAction<myData>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
          console.log(itemInCart.quantity);
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (
      state,
      action: PayloadAction<IncreaseQuantityPayload>
    ) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<DecreaseQuantityPayload>
    ) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setAddItem, increaseQuantity, decreaseQuantity, removeItem } =
  basketReducer.actions;

export default basketReducer.reducer;
