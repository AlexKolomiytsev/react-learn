import React from 'react'

import FancyBorder from './FancyBorder'

class Dialog extends React.Component {
    render() {
        return (
            <FancyBorder color='blue'>
                <h1 className='Dialog-title'>
                    {this.props.title}
                </h1>
                <p className='Dialog-message'>
                    {this.props.message}
                </p>
                <div>
                    {this.props.children}
                </div>
            </FancyBorder>
        )

    }
}

export default Dialog;