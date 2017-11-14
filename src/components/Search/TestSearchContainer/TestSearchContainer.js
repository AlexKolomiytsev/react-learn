import React from 'react'

import './TestSearchContainer.css'

import FilterableProductTable from '../FilterableProductTable/FilterableProductTable'

import data from '../mock';

class TestSearchContainer extends React.Component {
    render() {
        return (
            <div className='TestSearchContainer'>
                <FilterableProductTable
                    products={data}
                />
            </div>
        )
    }
}

export default TestSearchContainer