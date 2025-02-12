

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slice/cartslice'; 
import testReducer from "../Slice/authslice"


export const Store = configureStore({
  reducer: {
    cart: cartReducer, 
    test: testReducer,
  },
});
