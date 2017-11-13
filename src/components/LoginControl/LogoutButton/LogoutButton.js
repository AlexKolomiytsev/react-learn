import React from 'react'

class LogoutButton extends React.Component {
    render() {
        const {onClick} = this.props;

        return (
            <button onClick={onClick}>Logout</button>
        )
    }
}

export default LogoutButton;