import { RootState } from '../../store';

export const getAllCardsProducts = (state: RootState) => {
  return state.rootReducer.allProducts.products;
};

export const getLoadingAllProducts = (state: RootState) => {
  return state.rootReducer.allProducts.loading;
};
