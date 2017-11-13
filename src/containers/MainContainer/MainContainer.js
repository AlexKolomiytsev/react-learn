import React from 'react';
import './MainContainer.css';

import Header from '../../components/Header/Header'

class MainContainer extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default MainContainer;
