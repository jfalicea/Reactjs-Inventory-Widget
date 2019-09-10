import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(event){
        const newVal = event.target.value
        // console.log("SEARCH BAR INPUT",newVal)
        // this.setState({
        //     search:newVal
        // })
        this.props.changeFromParent(newVal)
    }

    render(){
        return(
            <div className="search-bar">
                <input type="text" value={this.props.search} onChange={this.changeSearch}placeholder="Search..." />
                <div>
                    <input id="in-stock" type="checkbox"  /> Only show products in stock
                </div>
            </div>
        )
    }
}

export default SearchBar