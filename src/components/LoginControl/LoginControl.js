import React from 'react'

import LoginButton from './LoginButton/LoginButton'
import LogoutButton from './LogoutButton/LogoutButton'

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        console.log('do login');
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        console.log('do logout');
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick}/>
            : <LoginButton onClick={this.handleLoginClick}/>

        return (
            <div>
                {button}
            </div>
        )
    }
}

export default LoginControl