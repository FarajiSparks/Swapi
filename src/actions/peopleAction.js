import axios from 'axios';
import { people, planets, vehicles } from '../api';

async function fetchAll(url) {
  let nextUrl = url;
  let allData = [];

  while (nextUrl) {
    const response = await axios.get(nextUrl);
    allData = [...allData, ...response.data.results];
    nextUrl = response.data.next;
  }

  return allData;
}

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