import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, action.payload] };
        case 'ADD_CARD':
            let payload = action.payload;
            payload["isFavorite"] = false;
            return { ...state, cards: [...state.cards, payload] };
        case 'ADD_LIST':
            return { ...state, lists: [...state.lists, action.payload] };
        case "UPDATE_SEARCHSTRING":
            return { ...state, searchString: action.payload };
        case 'TOGGLE_CARD_FAVORITE':
            return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
        default:
            return { ...state };
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;
export const getSearchString = (state) => state.searchString;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getFavoriteCards = ({ cards }) => {
    let cardsReturn = cards.filter(card => card.isFavorite === true)
    return cardsReturn.length === 0 ? [{ id: 0, columnId: 0, title: 'No cards' }] : cardsReturn
};

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const udpateSearchstring = (payload) => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const udpateIsFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

export default store;