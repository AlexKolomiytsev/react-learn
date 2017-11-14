import React from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {

    render() {
        const {products} = this.props;

        const categories = [...new Set(products.map((product) => product.category))];

        return (
            <div className='ProductTable'>
                {categories.map((category) =>
                    <div
                        key={category}
                        className='ProductCategory'
                    >

                        <ProductCategoryRow
                            category={category}
                        />

                        {
                            products
                                .filter((product) => product.category === category)
                                .map((product) =>
                                    <ProductRow
                                        key={product.id}
                                        product={product}
                                    />
                                )
                        }
                    </div>
                )}
            </div>
        )
    }
}

export default ProductTable