import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products"
let initialState = {
 loading : false,
 products : [],
 error : null

}
 
export const getProducts = createAsyncThunk("getProducts", async ()=>{
  const response = await axios.get(baseUrl);
  return {products : response.data}
}
)

export const productsSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        
    },
    extraReducers: (builder) => {
      builder
            .addCase(getProducts.pending, (state, action)=>{
                  state.loading = true
            })
            .addCase(getProducts.fulfilled, (state,action)=>{
              state.products = action.payload.products;
              state.loading = false
            })
            .addCase(getProducts.rejected, (state,action)=>{
              // state.error = action.payload.error;
              state.loading = false
            })
    }
})


export default productsSlice.reducer