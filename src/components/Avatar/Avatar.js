import React from 'react';

class Avatar extends React.Component {

    render() {
        const { user } = this.props;

        return (
            <img
                className='Avatar'
                src={user.avatarUrl}
                alt={user.name}
            />
        );
    }
}

export default Avatar;
