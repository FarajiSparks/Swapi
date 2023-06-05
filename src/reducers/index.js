import {combineReducers} from "redux";
import peopleReducer from "./peopleReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    detail: detailReducer
});

export default rootReducer;