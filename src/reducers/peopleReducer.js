const initState = {
    person : [],
    planets: [],
    vehicles: [], 
    decks: [], 
    searched: []
}

const peopleReducer = (state=initState, action) =>{
    switch(action.type){
        case "FETCH_INFO":
            return{...state, person: action.payload.people, 
                            planets: action.payload.planets, 
                            vehicles: action.payload.vehicles}
        default:
            return{...state} 
    }
}



export default peopleReducer;