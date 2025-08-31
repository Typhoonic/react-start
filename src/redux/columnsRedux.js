import shortid from "shortid";

const ADD_COLUMN = 'app/lists/ADD_COLUMN'

//selectors
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
}

export default columnsReducer;