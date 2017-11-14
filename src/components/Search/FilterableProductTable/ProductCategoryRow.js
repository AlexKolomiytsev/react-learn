import React from 'react'

class ProductCategoryRow extends React.Component {
    render() {
        const { category } = this.props;

        return (
            <div className='ProductCategoryRow'>{category}</div>
        )
    }
}

export default ProductCategoryRow