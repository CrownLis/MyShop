import { RootState } from './../store';

export const getActiveUserData = (state: RootState) => {
  return state.rootReducer.activeUser.activeUser;
};

export const getActiveUser = (state: RootState) => {
  return state.rootReducer.activeUser;
};

export const getActiveUserCart = (state: RootState) => {
  return state.rootReducer.activeUser.cart;
};
