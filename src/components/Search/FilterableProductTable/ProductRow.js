import React from 'react'

class ProductRow extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <div className='ProductRow'>
                {product.name}
            </div>
        )
    }
}

export default ProductRow