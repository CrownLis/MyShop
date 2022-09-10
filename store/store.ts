import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSlice from './ducks/cards/cardsSlice'
import productSlice from './ducks/product/productSlice'
import usersSlice from './ducks/users/usersSlice'
import activeUserSlice from './ducks/activeUser/activeUserSlice'
import cartsSlice from './ducks/carts/cartsSlice'

const rootReducer = combineReducers({
    cards: cardsSlice,
    product: productSlice,
    users:usersSlice,
    activeUser:activeUserSlice,
    carts: cartsSlice
    })

const store = configureStore({
    reducer: {
        rootReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store