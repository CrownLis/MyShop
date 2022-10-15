import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards/cardsSlice';
import productSlice from './product/productSlice';
import usersSlice from './users/usersSlice';
import activeUserSlice from './activeUser/activeUserSlice';
import allProductsSlice from './allProducts/allProductsSlice';

const rootReducer = combineReducers({
  cards: cardsSlice,
  product: productSlice,
  users: usersSlice,
  activeUser: activeUserSlice,
  allProducts: allProductsSlice
});

const store = configureStore({
  reducer: {
    rootReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
