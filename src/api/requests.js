import axios from 'axios';

const RAPID_API_BASE_URL =  process.env.NODE_ENV === "production" ? "https://backend-portfolio-proxy.herokuapp.com/api/v1" : "http://localhost:5000/api/v1";

export const getPlacesData = async (listOption, ne, sw) => {
  try{
      const response = await axios.get(`${RAPID_API_BASE_URL}/traveladvisor/place?list_option=${listOption}&bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}`);

      return response.data;
      
  } catch(error) {
      console.log(error);
  }
}

export const getWeatherData = async (lat, lng) => {
  try{
    const response = await axios.get(`${RAPID_API_BASE_URL}/openweather/find?lat=${lat}&lng=${lng}`);

    return response.data;

  } catch(error) {
    console.log(error);
  }
}
