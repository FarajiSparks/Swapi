

const initialState = {
 decks: []
};

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            const newDeck = {
                id: state.decks.length + 1,
                name: action.payload.name,
                faction: action.payload.faction
            };
            return {
                ...state,
                decks: [...state.decks, newDeck]
            };
        case 'EDIT_DECK':
            return {
                ...state,
                decks: state.decks.map(deck =>
                deck.id === action.payload.deckId ? action.payload.updatedDeck : deck
                )
        };
        case 'DELETE_DECK':
            return {
                ...state,
                decks: state.decks.filter(deck => deck.id !== action.payload)
                };
        case 'LOAD_DECK':
            return{
                ...state, 
                decks: state.decks
            }
        // case 'ADD_CARD':
        //     return {

        //     }
        case 'SEARCH_DECK':
            return{
                ...state,
                decks: state.decks.filter(deck=>deck.name === action.payload.name)
            }
        default:
    return state;
    }
};

export default deckReducer;