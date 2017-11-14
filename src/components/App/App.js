import React from 'react';

import './App.css';

import Test from "../Test/Test";
import Comment from "../Comment/Comment";
import Clock from "../Clock/Clock";
import Toggle from "../Toggle/Toggle";
import LoginControl from "../LoginControl/LoginControl"
import List from "../List/List";
import NameForm from "../NameForm/NameForm";
import Reservation from "../Reservation/Reservation";
import Calculator from '../Boiling/Calculator';

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

        const someList = [1, 2, 3, 4, 5];

        return (
            <div className="App">
                {element}

                <Calculator/>

                <Test type='testProp'/>

                <Comment
                    author={someComment.author}
                    text={someComment.text}
                    date={someComment.date}
                />

                <Clock/>

                <Toggle/>

                <LoginControl/>

                <List list={someList}/>

                <NameForm/>

                <Reservation/>
            </div>
        );
    }
}

export default App;
