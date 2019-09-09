import React, {Component} from 'react';
import productData from './data'
import ProductRow from './ProductRow';

console.log(productData)


function ProductTable(props){
    const products = productData.data.map((product,i)=>{
        return(
            <ProductRow product={product} key={i}/>
            // each productRow is comingfrom ProductRow.js
        )
    })

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
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable