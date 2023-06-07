import {combineReducers} from "redux";
import peopleReducer from "./peopleReducer";
import detailReducer from "./detailReducer";
import deckReducer from "./deckReducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    detail: detailReducer,
    decks: deckReducer
});

export default rootReducer;