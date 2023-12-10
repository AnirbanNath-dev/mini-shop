import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./features/slices";

export const store = configureStore({
    reducer:{
        shop: shopSlice
    }
})