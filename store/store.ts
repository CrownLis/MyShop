import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSlice from './ducks/cards/cardsSlice'
import productSlice from './ducks/product/productSlice'
import usersSlice from './ducks/users/usersSlice'
import activeUserSlice from './ducks/activeUser/activeUserSlice'
import allProductsSlice from './ducks/allProducts/allProductsSlice'

const rootReducer = combineReducers({
    cards: cardsSlice,
    product: productSlice,
    users:usersSlice,
    activeUser:activeUserSlice,
    allProducts:allProductsSlice
    })

const store = configureStore({
    reducer: {
        rootReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store