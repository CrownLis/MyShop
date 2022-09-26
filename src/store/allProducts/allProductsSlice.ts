import { ICard } from './../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./asyncAction";

export interface cardsState {
   loading: boolean
   products: ICard[] | null
   error: string | null
}

const initialState: cardsState = {
   products: [],
   loading: true,
   error: null
}

const allProductsSlice = createSlice({
   name: 'allProducts',
   initialState,
   reducers: {
      sortAllProducts(state, action: PayloadAction<string[]>) {
         if (state.products) {
            action.payload[0] === 'Rating' ?
               action.payload[1] === 'on' ?
                  state.products = state.products.sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1) :
                  state.products = state.products.sort((a, b) => a.rating.rate < b.rating.rate ? 1 : -1) :
               action.payload[1] === 'on' ?
                  state.products = state.products.sort((a, b) => a.price > b.price ? 1 : -1) :
                  state.products = state.products.sort((a, b) => a.price < b.price ? 1 : -1)
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchAllProducts.pending, (state) => {
            state.loading = true,
               state.error = null
         })
         .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false,
               state.products = action.payload
         })
         .addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false,
               state.error = null
         })
   }
})

export const { sortAllProducts } = allProductsSlice.actions
export default allProductsSlice.reducer