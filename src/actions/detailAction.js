//Details Action

import axios from 'axios';

 export const loadDetail = (url) => async (dispatch)=>{
    //Fetching Various Api Sections Through Urls from Detail Data
    const detailData = await axios.get(url);
    const starShipUrls = await detailData.data.starships;
    const homeworldData = await axios.get(detailData.data.homeworld);
    const speciesData =  (detailData.data.species.length === 0) ? false : await axios.get(detailData.data.species);
    const vehicleUrls = detailData.data.vehicles;
    const starShipData = await Promise.all(
        starShipUrls.map((url) => axios.get(url))
      );
      const vehicleData = await Promise.all(
        vehicleUrls.map((url) => axios.get(url))
      );
console.log(starShipData)
    dispatch({
        type: "GET_DETAIL",
        payload: {
            detail: detailData.data, 
            starship: starShipData.map((response) => response.data),
            homeworld: homeworldData.data,
            species: speciesData.data ? speciesData.data : '',
            vehicles: vehicleData.map((response) => response.data),
        }
    });
};