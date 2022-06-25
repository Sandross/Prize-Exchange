import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../mock';

const radarFitSlice = createSlice({
  name: 'radarFit',
  initialState: {
    isCartOpen: false,
    wallet: 1200,
    products,
    total: 0,
    cartItems: [],
  },

  reducers: {
    addItems: (state, action) => {
      const alreadyExists = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );

      if (alreadyExists) {
        const newCartList = state.cartItems.map((item) => (item.id === action.payload.id
          ? { ...action.payload, qty: item.qty + 1 }
          : item));

        return { ...state, cartItems: newCartList };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    },

    openCart: (state, action) => ({ ...state, isCartOpen: action.payload }),

    decrementQty: (state, action) => {
      const newCartList = state.cartItems
        .map((item) => (item.id === action.payload.id
          ? { ...action.payload, qty: item.qty - 1 }
          : item))
        .filter((item) => item.qty >= 0);
      return { ...state, cartItems: newCartList };
    },

    incrementQty: (state, action) => {
      const newCartList = state.cartItems
        .map((item) => (item.id === action.payload.id
          ? { ...action.payload, qty: item.qty + 1 }
          : item));
      return { ...state, cartItems: newCartList };
    },

    removeItem: (state, action) => ({
      ...state,
      cartItems: state.cartItems.filter((elem) => elem.id !== action.payload),
    }),

    updateTotal: (state) => {
      const newValue = state.cartItems.reduce((acc, value) => acc + value.price * value.qty, 0);
      return { ...state, total: newValue };
    },
  },
});

export const {
  openCart, addItems, removeItem, updateTotal, decrementQty, incrementQty,
} = radarFitSlice.actions;
export default radarFitSlice.reducer;
