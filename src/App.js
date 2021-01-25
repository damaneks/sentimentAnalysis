import React from 'react';

import { Cards, Chart, HashtagPicker } from './components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <HashtagPicker />
                <Chart />
            </div>
        )
    }
}

export default App;