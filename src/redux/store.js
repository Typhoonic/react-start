import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux'
import cardsReducer from './cardsRedux'
import searchStringReducer from './searchStringRedux'
import initialState from './initialState';

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;