import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const cartSlice = createSlice({
name : "cart",
initialState,
reducers: {
    addToCart : (state,action)=>{
        state.value.push(action.payload.product)
    },
    removeFromCart : (state,action) => {
        state.value.pop(action.payload.product)
    }
}
}
)

export  const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer
