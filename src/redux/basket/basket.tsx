import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketState, myData } from '../../types';

const initialState: BasketState = {
  products: [],
};

const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setAddItem: (state, action:PayloadAction<myData>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { setAddItem } = basketReducer.actions;

export default basketReducer.reducer;
