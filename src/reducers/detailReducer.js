const initialState = {
    detail :[]
}

const detailReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return{...state, 
                    detail: action.payload.detail,
                    starship:action.payload.starship,
                    homeworld:action.payload.homeworld,
                    species:action.payload.species, 
                    vehicles:action.payload.vehicles
                };
        default:
            return{...state} 
    }
}

export default detailReducer;