import axios from 'axios';

 export const loadDetail = (url) => async (dispatch)=>{
    const detailData = await axios.get(url);
    const starShipData = detailData.data.starships
    const homeworldData = await axios.get(detailData.data.homeworld)
    const speciesUrl =  await axios.get(detailData.data.species)
    const speciesData = await axios.get(speciesUrl.data.url)
    const vehicleData =detailData.data.vehicles
    
    console.log(speciesData);
    console.log("hello");
    dispatch({
        type: "GET_DETAIL",
        payload: {
            detail: detailData.data, 
            starship: starShipData,
            homeworld: homeworldData.data,
            species: speciesData.data,
            vehicles: vehicleData
        }
    });
};