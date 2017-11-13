import React from 'react';
import './MainContainer.css';

import Header from '../../components/Header/Header'
import App from '../../components/App/App';

class MainContainer extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <App />
            </div>
        );
    }
}

export default MainContainer;
