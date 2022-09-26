import { RootState } from '../../store';

export const getCardsProducts = (state: RootState) => {
    return state.rootReducer.cards.cards
}

export const getLoadingCards = (state:RootState) => {
    return state.rootReducer.cards.loading
}