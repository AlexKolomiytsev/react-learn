import React from 'react'

class LoginButton extends React.Component {
    render() {
        const {onClick} = this.props;

        return (
            <button onClick={onClick}>Login</button>
        )
    }
}

export default LoginButton;