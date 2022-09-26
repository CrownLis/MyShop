import { IUser } from './../../types/types';
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, register } from "./asyncAction";

export interface cardsState {
    loading: boolean
    users:  IUser[] | null | undefined
    error: string | null
  }

const initialState:cardsState = {
    users:[],
    loading: true,
    error:null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
 builder
 .addCase(fetchAllUsers.pending, (state) => {
    state.loading = true,
    state.error = null
 })
 .addCase(fetchAllUsers.fulfilled, (state,action) => {
    state.loading = false,
    state.users = action.payload
 })
 .addCase(register.pending, (state) => {
   state.loading = true,
   state.error = null
})
.addCase(register.rejected, (state,action) => {
  state.loading = false,
  state.error = 'error'
})
.addCase(register.fulfilled, (state,action) => {
   state.loading = false,
   state.users = state.users?.concat(action.payload)
})
    }
})

export default usersSlice.reducer