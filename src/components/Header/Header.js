import React from 'react';
import logo from '../../logo.svg';

const styles = require('./Header.css');

class Header extends React.Component {

    render() {
        return (
            <header className={styles.header}>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
        );
    }
}

export default Header;
