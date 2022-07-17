import axios from "axios";

export const getPlaceData = async (sw,ne,service) => {
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${service}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_API
            }
          })
        return data
    } catch(error){
        console.log(error);
    }
}