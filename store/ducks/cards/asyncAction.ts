import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from '../../../types/types';
import { getCategoryCards, sortCardsBySelect } from '../../../API/shopAPI';


export const getCardsByCategory = createAsyncThunk<ICard[],string, { rejectValue:string }>(
    'cards/fetchCardsByCategory',
    async (category, {rejectWithValue}) => {
            const response = await getCategoryCards(category)
            const data = response.data
            return data
        }
  )