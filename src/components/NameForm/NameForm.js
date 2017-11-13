import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' }
    }

    handleChange = (event) => {
        console.log(event.target);
        this.setState({ value: event.target.value.toUpperCase() })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        alert(`A name was submitted: ${this.state.value}`)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="someName">Name</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        )
    }
}

export default NameForm;