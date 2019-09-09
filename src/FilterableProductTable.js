import React, {Component} from 'react';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {  // if you destructure "component you extend it. "

    render(){
        return(
            <div class="col-sm-3">
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}

export default FilterableProductTable



//this is the "orange"