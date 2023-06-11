import axios from 'axios';
import {people, planets, vehicles, searchedPersonURL} from '../api';


//Factory Function to Fetch All Pages From Api
async function fetchAll(url) {
  let nextUrl = url;
  let allData = [];

  while (nextUrl) {
    const response = await axios.get(nextUrl);
    allData = [...allData, ...response.data.results];
    nextUrl = response.data.next;
  }
  return allData;
};


//Initial Load Action For All Cards
export const loadPerson = () => async (dispatch) => {
  // Fetch all data
  const [allPersonData, allPlanetData, allVehicleData] = await Promise.all([
    fetchAll(people()),
    fetchAll(planets()),
    fetchAll(vehicles()),
  ]);

  dispatch({
    type: 'FETCH_INFO',
    payload: {
      people: allPersonData,
      planets: allPlanetData,
      vehicles: allVehicleData,
    },
  });
};

//Load All Cards Alphabetically Action 
export const loadAZ = () => async (dispatch) =>{
  // Fetch all data
  const [allPersonData] = await Promise.all(
      [fetchAll(people())]
    );
  
   // Sort People Data Alphabetically A-Z
  const sortedPersonData = allPersonData.sort((a,b)=>{
    const aName = a.name;
    const bName = b.name;
    if (bName >aName ) return -1;
    if ( bName< aName) return 1;
    return 0;
  });

  dispatch({
    type: 'FETCH_AZ',
    payload: {
    people: sortedPersonData,  
    },
  });
};

//Load All Cards From Oldest to Youngest
export const loadOldest = () => async (dispatch) => {
  // Fetch All Data
  const [allPersonData] = await Promise.all(
    [fetchAll(people())]    
  );

  // Sort People Data By Birth Year Oldest
  const sortedPersonData = allPersonData.sort((a, b) => {
      const aYear = a.birth_year === 'unknown' ? -1 : parseInt(a.birth_year);
      const bYear = b.birth_year === 'unknown' ? -1 : parseInt(b.birth_year);
      if (aYear > bYear) return -1;
      if (aYear < bYear) return 1;
        return 0;
    });

  dispatch({
    type: 'FETCH_OLD',
    payload: {
      people: sortedPersonData,
    },
  });
};

//Load All Cards From Youngest to Oldest
export const loadYoungest = () => async (dispatch) => {
  // Fetch all data
  const [allPersonData, allPlanetData, allVehicleData] = await Promise.all([
    fetchAll(people()),
    fetchAll(planets()),
    fetchAll(vehicles()),
  ]);

  // Sort People Data By Birth Year Youngest
  const sortedPersonData = allPersonData.sort((a, b) => {
    const aYear = a.birth_year === 'unknown' ? -1 : parseInt(a.birth_year);
    const bYear = b.birth_year === 'unknown' ? -1 : parseInt(b.birth_year);
    if (aYear < bYear) return -1;
    if (aYear > bYear) return 1;
    return 0;
  });
  dispatch({
    type: 'FETCH_YOUNG',
    payload: {
      people: sortedPersonData,
      planets: allPlanetData,
      vehicles: allVehicleData,
    },
  });
};

export const  fetchSearched = (person_name) => async(dispatch) =>{
    const searchedPerson = await axios.get(searchedPersonURL(person_name));
    console.log(searchedPerson.data.results);
    dispatch({
        type: "FETCH_SEARCHED", 
        payload: {
            searched: searchedPerson.data.results
        }
    });
}