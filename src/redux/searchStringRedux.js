const UPDATE_SEARCHSTRING = 'app/searchString/UPDATE_SEARCHSTRING'

//selectors
export const getSearchString = (state) => state.searchString;
export const udpateSearchstring = (payload) => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;