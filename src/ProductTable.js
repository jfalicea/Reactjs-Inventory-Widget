import React, {Component} from 'react';

function ProductTable(props){
    return(
        <div className="product-table">
            <table className="table table-stripe">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* All Products Go Here */}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable