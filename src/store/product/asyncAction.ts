import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from './../../types/types';
import { getProductById } from './../../API/shopAPI';


export const getProductsById = createAsyncThunk<ICard,number, { rejectValue:string }>(
    'product/getProductsById',
    async (id, {rejectWithValue}) => {
            const response = await getProductById(id)
            const data = response.data
            return data
        }
  )