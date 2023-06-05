import axios from 'axios';

 export const loadDetail = (url) => async (dispatch)=>{
    const detailData = await axios.get(url)
    console.log(detailData);
    dispatch({
        type: "GET_DETAIL",
        payload: {
            detail: detailData.data.results
        }
    });
};