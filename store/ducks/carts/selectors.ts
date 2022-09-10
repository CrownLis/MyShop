import { RootState } from '../../store';

export const getCardsProducts = (state: RootState) => {
    return state.rootReducer.cards.cards
}