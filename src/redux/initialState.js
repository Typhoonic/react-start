
const initialState = {
    searchString: "",

    columns: [
        {
            id: 1,
            listId: '1',
            title: 'Books',
            icon: 'book',
        },
        {
            id: 2,
            listId: '1',
            title: 'Movies',
            icon: 'film',
        },
        {
            id: 3,
            listId: '1',
            title: 'Games',
            icon: 'gamepad',
        },
        {
            id: 4,
            listId: '2',
            title: 'Instruments',
            icon: 'gamepad',
        }
    ],

    cards: [
        { id: 1, columnId: 1, title: 'This is Going to Hurt', isFavourite: false },
        { id: 2, columnId: 1, title: 'Interpreter of Maladies', isFavourite: false },
        { id: 3, columnId: 2, title: 'Harry Potter', isFavourite: false },
        { id: 4, columnId: 2, title: 'Star Wars', isFavourite: false },
        { id: 5, columnId: 3, title: 'The Witcher', isFavourite: false },
        { id: 6, columnId: 3, title: 'Skyrim', isFavourite: false }
    ],

    lists: [
        {
            id: '1',
            title: 'Things to do...',
            description: 'Interesting things I want to check out'
        },
        {
            id: '2',
            title: 'Test list',
            description: 'Lorem Ipsum'
        }
    ]
};

export default initialState;