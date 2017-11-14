import React                from 'react';

import TemperatureInput     from './TemperatureInput';
import BoilingVerdict       from './BoilingVerdict';

import {
    toCelsius,
    toFahrenheit,
    tryConvert }            from "../../utils/helpers";

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelciusChange = (temperature) => {
        this.setState({scale: 'c', temperature})
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature})
    };

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelciusChange}
                />
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }

}

export default Calculator;