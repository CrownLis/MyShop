import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewCart, fetchUsers, getUserCart, logIn, updateUser } from '../../API/shopAPI';
import { ICart, IUser } from '../../types/types';

export const checkAuth = createAsyncThunk<any, Record<string, any>, { rejectValue: Error }>(
    'activeUser/logIn',
    async (values) => {
            const response = await logIn(values)
            const data = response.data
            if (data !== 'username or password is incorrect') {
                const users = await fetchUsers()
                const activeUserData = users.data?.filter((user: { username: any; }) => user.username === values.username)
                const cart = await getUserCart(activeUserData[0].id)
                if (cart.data.length <= 0) {
                    const newCart = await addNewCart({ userId: activeUserData[0].id, date: new Date, products: [] })
                    const activeUser = { authKey: data, activeUserData: activeUserData[0], cart: newCart.data }
                    return activeUser
                }
                const activeUser = { authKey: data, activeUserData: activeUserData[0], cart: cart.data[0] }
                return activeUser
            }
        }
)

export const editUser = createAsyncThunk<IUser, [number, IUser], { rejectValue: string }>(
    'activeUser/editUser',
    async ([values, id]) => {
            const response = await updateUser(id, values)
            const data = response.data
            return data
        }
)

export const fetchUserCart = createAsyncThunk<ICart, number, { rejectValue: string }>(
    'carts/fetchUserCart',
    async (id) => {
            const response = await getUserCart(id)
            const data = response.data
            return data
    }
)