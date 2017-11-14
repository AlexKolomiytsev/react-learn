import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            isInStock: false
        }
    }

    handleSearch = (target) => {
        const name = target.name;

        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;

        this.setState({
            [name]: value
        });
    };

    filterProducts(products) {
        const {searchText, isInStock} = this.state;

        let filtered = products;

        filtered = searchText
            ? products.filter(
                (product) => product.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            )
            : filtered;

        filtered = isInStock
            ? products.filter((product) => product.stocked)
            : filtered;

        return filtered
    }

    render() {
        const {products} = this.props;

        const {searchText, isInStock} = this.state;

        const filteredProducts = this.filterProducts(products);

        return (
            <div className='FilterableProductTable'>
                <SearchBar
                    text={searchText}
                    inStock={isInStock}
                    onSearchChange={this.handleSearch}
                />
                <ProductTable
                    products={filteredProducts}
                />
            </div>
        )
    }
}

export default FilterableProductTable