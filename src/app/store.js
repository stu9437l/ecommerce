import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/reducer/product-slice";
import cartSlice from "../features/reducer/cart-slice";

export const store=configureStore({
    reducer:{
        product:productSlice ,
        cart:cartSlice    
    }
})