import React, {Component} from 'react';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {  // if you destructure "component you extend it. "

    render(){
        return(
            <div>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}

export default FilterableProductTable



//this is the "orange"