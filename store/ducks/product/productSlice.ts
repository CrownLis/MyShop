import { ICard } from '../../../types/types';
import { createSlice, PayloadAction, createAsyncThunk, Action } from "@reduxjs/toolkit";
import { getProductsById } from "./asyncAction";

export interface productsState {
    loading: boolean
    product:  ICard | null
    error: string | null
  }

const initialState:productsState = {
    product:null,
    loading: true,
    error:null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
 builder
 .addCase(getProductsById.pending, (state) => {
    state.loading = true,
    state.error = null
 })
 .addCase(getProductsById.fulfilled, (state,action) => {
    state.loading = false,
    state.product = action.payload
 })
    }
})

export default productSlice.reducer