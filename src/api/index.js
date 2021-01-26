import axios from 'axios';

const url = `https://covid19.mathdro.id/api`;

const apiUrl = `https://semanticanalizisapp.azurewebsites.net/test`;

export const fetchData = async (hashtag) => {
    let changeableUrl = url;

    if(hashtag) {
        changeableUrl = `${url}`
    }

    try {
        const { data: {positive, neutral, negative, lastUpdate }} = await axios.get(apiUrl);
        
        return { positive, neutral, negative, lastUpdate, };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data: {dailyData} } = await axios.get(apiUrl);
        
        return dailyData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}