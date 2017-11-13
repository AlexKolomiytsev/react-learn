import * as React from 'react'

import Avatar from '../Avatar/Avatar'

class UserInfo extends React.Component {

    render() {
        const { user } = this.props;

        return (
            <div className='UserInfo'>
                <Avatar user={user}/>
                <div className='UserInfo-name'>
                    {user.name}
                </div>
            </div>
        );
    }

}

export default UserInfo;