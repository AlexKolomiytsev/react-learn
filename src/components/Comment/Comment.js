import React from 'react'

import './Comment.css'

import UserInfo from '../UserInfo/UserInfo';

class Comment extends React.Component {
    render() {
        const { author, text, date } = this.props;

        return (
            <div className='Comment'>
                <UserInfo user={author}/>
                <div className='Comment-text'>
                    {text}
                </div>
                <div className='Comment-date'>
                    {this.formatDate(date)}
                </div>
            </div>
        );
    }

    formatDate(date) {
        return date;
    }
}

export default Comment;