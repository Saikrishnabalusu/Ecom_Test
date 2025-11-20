import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productsReducer from "./productsSlice"


const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productsReducer,
    }
}) // here reducer is a root reducer whose value is same as key


export default store;