

export const loadDecks =()=>({
    type: 'LOAD_DECKS', 
})


export const createDeck = (faction, cards)  =>({
    type: 'ADD_DECK',
    payload:{
        faction, 
        cards
    }
});