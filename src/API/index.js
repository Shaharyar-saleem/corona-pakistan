import axios from 'axios';

const url= 'https://api.thevirustracker.com/free-api?countryTimeline=PK';

export const fetchDailyData = async() =>{
    try {
        const  data  = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}