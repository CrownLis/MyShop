import { ICard } from '../../../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCardsByCategory } from "./asyncAction";

export interface cardsState {
   loading: boolean
   cards: ICard[] | null
   error: string | null
}

const initialState: cardsState = {
   cards: [],
   loading: true,
   error: null
}

const cardsSlice = createSlice({
   name: 'cards',
   initialState,
   reducers: {
      sortCards(state, action: PayloadAction<string[]>) {
         if (state.cards) {
            action.payload[0] === 'Rating' ?
               action.payload[1] === 'on' ?
                  state.cards = state.cards.sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1) :
                  state.cards = state.cards.sort((a, b) => a.rating.rate < b.rating.rate ? 1 : -1) :
               action.payload[1] === 'on' ?
                  state.cards = state.cards.sort((a, b) => a.price > b.price ? 1 : -1) :
                  state.cards = state.cards.sort((a, b) => a.price < b.price ? 1 : -1)
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCardsByCategory.pending, (state) => {
            state.loading = true,
               state.error = null
         })
         .addCase(getCardsByCategory.fulfilled, (state, action) => {
            state.loading = false,
               state.cards = action.payload
         })
         .addCase(getCardsByCategory.rejected, (state, action) => {
            state.loading = false,
               state.error = null
         })
   }
})

export const { sortCards } = cardsSlice.actions
export default cardsSlice.reducer