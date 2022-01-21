import axios from 'axios';

const TRAVEL_ADVISOR_API_REQUEST_URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (ne, sw) => {
    try{
        const response = await axios.get(TRAVEL_ADVISOR_API_REQUEST_URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '09616a59a9mshf349670f7f41083p1b7b80jsna6056164d656'
            }
        });

        console.log(response.data.data);
        return response.data.data;

    } catch(error) {
        console.log(error);
    }
}
