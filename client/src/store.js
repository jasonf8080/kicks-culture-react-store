import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice"; 
import authSlice from "./features/authSlice";
import reviewSlice from "./features/reviewSlice";
import cartSlice from "./features/cartSlice";


export const store = configureStore({
    reducer:{
       filter: filterSlice,
       auth: authSlice,
       review: reviewSlice,
       cart: cartSlice
    }
})