import shortid from "shortid";
import strContains from "../utils/strContains"

const ADD_CARD = 'app/cards/ADD_CARD'
const DELETE_CARD = 'app/cards/DELETE_CARD'
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE'


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });
export const udpateIsFavorite = (payload) => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const getFavoriteCards = ({ cards }) => {
    let cardsReturn = cards.filter(card => card.isFavorite === true);
    return cardsReturn.length === 0 ? [{ id: 0, columnId: 0, title: 'No cards' }] : cardsReturn
};
export const isFavoriteById = ({ cards }, cardId) => {
    if (!cardId) {
        return false;
    }

    const card = cards.find(card => card.id === cardId)
    return card.isFavorite
};

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid(), isFavorite: false }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        case DELETE_CARD:
            return statePart.filter(card => card.id !== action.payload);
        default:
            return statePart;
    }
}

export default cardsReducer;