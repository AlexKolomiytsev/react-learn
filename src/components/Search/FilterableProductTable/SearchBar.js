import React from 'react'

class SearchBar extends React.Component {

    handleChange = (e) => {
        this.props.onSearchChange(e.target);
    };

    render() {
        const { text, inStock } = this.props;

        return (
          <div className='SearchBar'>
              <div>
                  <input
                      type="text"
                      name='searchText'
                      value={text}
                      placeholder='Search...'
                      onChange={this.handleChange}
                  />
              </div>

              <div>

                  <input
                      type="checkbox"
                      name='isInStock'
                      checked={inStock}
                      onChange={this.handleChange}
                  />

                  Only show products in stock

              </div>
          </div>
        );
    }
}

export default SearchBar