import React from 'react';

import { Cards, Chart, HashtagPicker, RandomTweets } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        hashtag: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleHashtagChange = async (hashtag) => {
        const fetchedData = await fetchData(hashtag);

        this.setState({data: fetchedData, hashtag: hashtag});
    }

    render() {
        const {data} = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <HashtagPicker handleHashtagChange={this.handleHashtagChange}/>
                <Chart />
                <RandomTweets />
            </div>
        )
    }
}

export default App;