import React from 'react';

import './App.css';

import Test from "../Test/Test";
import Comment from "../Comment/Comment";

class App extends React.Component {
    render() {
        const formatName = (user) => `${user.firstName} ${user.lastName}`;

        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };

        const element = <h1>Hello, {formatName(user)}!</h1>;

        return (
            <div className="App">
                {element}
                Some prop bind: {this.props.type}
                <Test type='testProp'/>
                <Comment/>
            </div>
        );
    }
}

export default App;
