import axios from 'axios';

const apiUrl = `https://semanticanalizisapp.azurewebsites.net/test`;

export const fetchData = async (hashtag) => {
    let changeableUrl = apiUrl;

    if(hashtag) {
        changeableUrl = `${apiUrl}`
    }

    try {
        const { data: {positive, neutral, negative, lastUpdate, randomTweets }} = await axios.get(changeableUrl);
        console.log(randomTweets);
        return { positive, neutral, negative, lastUpdate, randomTweets };
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
