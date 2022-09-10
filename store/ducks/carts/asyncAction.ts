import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllCarts, getUserCart } from "../../../API/shopAPI"
import { ICart } from "../../../types/types"

export const fetchAllCarts = createAsyncThunk<ICart[], void, { rejectValue: string }>(
    'carts/fetchAllCarts',
    async (_) => {
            const response = await getAllCarts()
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