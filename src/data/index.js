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
              'X-RapidAPI-Key': 'a71477a241mshc548ce6f60225afp18cc67jsne2869a4867d5'
            }
          })
        return data
    } catch(error){
        console.log(error);
    }
}