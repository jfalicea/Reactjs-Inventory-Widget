import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <div>
                    <input id="in-stock" type="checkbox" /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default SearchBar