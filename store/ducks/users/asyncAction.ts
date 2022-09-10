import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../../types/types';
import { fetchUsers, SignUp } from '../../../API/shopAPI';


export const fetchAllUsers = createAsyncThunk<IUser[],void, { rejectValue:string }>(
    'users/fetchUsers',
    async (_) => {
            const response = await fetchUsers()
            const data = response.data
            return data
        }
  )

  export const register = createAsyncThunk<IUser,Record<string, any>, { rejectValue:string }>(
    'activeUser/SignUP',
    async (values, {rejectWithValue}) => {
            const response = await SignUp(values)
            const data = response.data
            return data
        }
  )