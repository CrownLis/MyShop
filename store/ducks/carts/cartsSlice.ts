import { ICart } from '../../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCarts, fetchUserCart } from './asyncAction'


export interface cartsState {
   loading: boolean
   cart: ICart | null
   error: string | null
}

const initialState: cartsState = {
   cart: null,
   loading: true,
   error: null
}

const cartsSlice = createSlice({
   name: 'carts',
   initialState,
   reducers: {
     
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchUserCart.pending, (state) => {
            state.loading = true,
               state.error = null
         })
         .addCase(fetchUserCart.fulfilled, (state, action) => {
            state.loading = false,
               state.cart = action.payload
         })
         .addCase(fetchUserCart.rejected, (state, action) => {
            state.loading = false,
               state.error = null
         })
   }
})

export default cartsSlice.reducer