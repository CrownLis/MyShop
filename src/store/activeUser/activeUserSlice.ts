import { ICard, IProduct } from './../../../types/types';
import { ICart, IUser } from '../../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, editUser, fetchUserCart } from './asyncAction';

export interface activeUserState {
  loading: boolean
  activeUser: IUser | null
  error: string | null
  authKey: string | null
  cart: ICart | null
}

const initialState: activeUserState = {
  activeUser: null,
  loading: true,
  error: null,
  authKey: null,
  cart: null
}

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser(state, action: PayloadAction<IUser>) {
      state.activeUser = action.payload
    },
    increaseAmountProduct(state, action: PayloadAction<number>) {
      state?.cart?.products.forEach(i => { if (i.productId == action.payload) { i.quantity++ } })
    },
    decreaseAmountProduct(state, action: PayloadAction<number>) {
      state?.cart?.products.forEach(i => { if (i.productId == action.payload && i.quantity > 1) { i.quantity-- } })
    },
    deleteProduct(state, action: PayloadAction<number>) {
      if (state && state.cart) {
        state.cart.products = state.cart.products.filter((product) => product.productId !== action.payload)
      }
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      if (state && state.cart) {
        const product = state.cart.products.find((p) => p.productId === action.payload.productId);
        if (product) {
          product.quantity = product.quantity + action.payload.quantity
        } else {
          state.cart.products.push(action.payload);
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true,
          state.error = null
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false,
          state.error = 'error'
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false,
          state.authKey = action.payload.authKey
        state.activeUser = action.payload.activeUserData
        state.cart = action.payload.cart
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true,
          state.error = null
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false,
          state.error = 'error'
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false,
          state.activeUser = action.payload
      })
  }
})

export const { setActiveUser, increaseAmountProduct, decreaseAmountProduct, deleteProduct, addProduct } = activeUserSlice.actions
export default activeUserSlice.reducer