import { RootState } from './../store';

export const getProduct = (state: RootState) => {
  return state.rootReducer.product.product;
};

export const getProductLoading = (state: RootState) => {
  return state.rootReducer.product.loading;
};
