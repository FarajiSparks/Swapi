//Details Action

import axios from 'axios';

 export const loadDetail = (url) => async (dispatch)=>{
    //Fetching Various Api Sections Through Urls from Detail Data
    const detailData = await axios.get(url);
    const starShipData = await detailData.data.starships.map(async starshipUrl=> await axios.get(starshipUrl).then(data => {return data.data}));
    const homeworldData = await axios.get(detailData.data.homeworld);
    const speciesData =  (detailData.data.species.length === 0) ? false : await axios.get(detailData.data.species);
    const vehicleData = detailData.data.vehicles;
   console.log(starShipData);
    dispatch({
        type: "GET_DETAIL",
        payload: {
            detail: detailData.data, 
            starship: starShipData,
            homeworld: homeworldData.data,
            species: speciesData.data ? speciesData.data : '',
            vehicles: vehicleData
        }
    });
};