import React from 'react';
import './Test.css';

class Test extends React.Component {

    render() {
        return (
            <div className="Test">
                <h2>Test</h2>
                <div>
                    Some prop bindings: {this.props.type}
                </div>
            </div>
        );

    }
}

export default Test;
