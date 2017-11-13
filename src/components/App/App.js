import React from 'react';

import './App.css';

import Test from "../Test/Test";
import Comment from "../Comment/Comment";
import Clock from "../Clock/Clock";

class App extends React.Component {
    render() {
        const formatName = (user) => `${user.firstName} ${user.lastName}`;

        const user = {
            firstName: 'Harper',
            lastName: 'Perez',
            name: 'Harper Perez',
            avatarUrl: 'http://digitalspyuk.cdnds.net/16/03/768x432/gallery-1453464632-movies-avatar-still-01.jpg'
        };

        const someComment = {
            author: user,
            text: 'lorem ipsum dolor sir amet',
            date: new Date().toLocaleDateString()
        };

        const element = <h1>Hello, {formatName(user)}!</h1>;

        return (
            <div className="App">
                {element}

                <Test type='testProp'/>

                <Comment
                    author={someComment.author}
                    text={someComment.text}
                    date={someComment.date}
                />

                <Clock/>

            </div>
        );
    }
}

export default App;
