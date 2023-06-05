const initialState = {
    decks:[]
}

const deckReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_DECK":
            return{
                ...state, decks: action.payload.detail
            }
        default:
            return{...state}
    }
}