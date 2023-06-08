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
                            vehicles: action.payload.vehicles
                        };
        case "FETCH_SEARCHED":
            return{
                ...state,
                people:action.payload.searched
            };
        case "FETCH_YOUNG":
            return{
                ...state, person: action.payload.people
            };
        case "FETCH_OLD":
            return{
                ...state, person: action.payload.people
                }
        case "FETCH_AZ":
            return{
                ...state, person: action.payload.people
                  }
        default:
            return{...state} 
    }
}



export default peopleReducer;