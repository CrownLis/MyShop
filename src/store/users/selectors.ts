import { RootState } from '../store';

export const getAllUsers = (state: RootState) => {
  return state.rootReducer.users.users;
};
