import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({hashtag}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData(hashtag);
            setDailyData(initialDailyData);
        }

        fetchAPI();
    });

    if(!dailyData.length) {
        return "Brak rekordów\n";
    }
    
    const lineChart = (
        dailyData[0]
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ positive }) => positive),
                            label: 'Pozytywne',
                            borderColor: 'rgb(0, 255, 0)',
                            backgroundColor: 'rgba(0, 255, 0, 0.25)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ neutral }) => neutral),
                            label: 'Neutralne',
                            borderColor: 'rgb(255, 255, 0)',
                            backgroundColor: 'rgba(255, 255, 0, 0.25)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ negative }) => negative),
                            label: 'Negatywne',
                            borderColor: 'red',
                            backgroundColor: 'rgba( 255, 0, 0, 0.25)',
                            fill: true,
                        }],
                    }}
                />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;