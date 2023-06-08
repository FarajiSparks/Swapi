//Deck Actions
export const addDeck = (name, faction) => ({
    type: 'ADD_DECK',
    payload: { name, faction }
   });
   
export const editDeck = (deckId, updatedDeck) => ({
    type: 'EDIT_DECK',
    payload: { deckId, updatedDeck }
   });
   
export const deleteDeck = (deckId) => ({
    type: 'DELETE_DECK',
    payload: deckId
   });

export const loadDeck = (decks) => ({
    type: 'LOAD_DECK',
    payload: decks
    });

export const searchDeck = (name) =>({
    type: 'SEARCH_DECK',
    payload: name
});    