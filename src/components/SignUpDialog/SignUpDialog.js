import React from 'react';

import Dialog from "./Dialog";

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {login: ''}
    }

    handleChange = (e) => {
        this.setState({login: e.target.value})
    };

    handleSignUp = (e) => {
        console.log(`Do sign up: ${this.state.login}`);
    };

    render() {
        return (
            <Dialog
                title='Mars Exploration Program'
                message='How should we refer you?'
            >
                <input
                    value={this.state.login}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleSignUp}>
                    Sign Up
                </button>
            </Dialog>
        )
    }
}

export default SignUpDialog;