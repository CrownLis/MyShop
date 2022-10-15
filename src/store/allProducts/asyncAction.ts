import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from './../../types/types';
import { getAllProducts } from './../../API/shopAPI';

export const fetchAllProducts = createAsyncThunk<ICard[]>(
  'allProducts/fetchAllProducts',
  async (_) => {
    const response = await getAllProducts();
    const data = response.data;
    return data;
  }
);
