import React from 'react'

const SECOND = 1000;

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //runs after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            SECOND
        )
    }

    //runs before the component will removed from the DOM
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const { date } = this.state;

        return (
            <div>
                <h1>It's a clock:</h1>
                <div>{date.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;