import React from 'react'

import ListItem from './ListItem/ListItem'

class List extends React.Component {

    render() {
        const { list } = this.props;

        return (
            <ul className='List'>
                {list.map((item) =>
                    <ListItem
                        key={item.toString()}
                        item={item}
                    />
                )}
            </ul>
        );
    }
}

export default List;