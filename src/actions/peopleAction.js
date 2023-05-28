import axios from "axios";
import { people, planets, vehicles } from "../api";

//Action Creator

export const loadPerson = () => async (dispatch) =>{
    //Fetch Axios
    const personData = await axios.get(people());
    const planetData = await axios.get(planets());
    const vehicleData = await axios.get(vehicles());
    dispatch({
        type: "FETCH_INFO",
        payload: {
            people : personData, 
            planets : planetData, 
            vehicles: vehicleData
        }
    })
}
