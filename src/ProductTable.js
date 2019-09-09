import React, {Component} from 'react';
import productData from './data'
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

console.log(productData)


function ProductTable(props){
    let tempProducts = {}
        //returns a react object. 
        //cleans up data  with a for each. 
    productData.data.forEach((product,i)=>{
        if(tempProducts[product.category]===undefined){
            tempProducts[product.category] = []
        }
        tempProducts[product.category].push(product)
        // return(
        //     <ProductRow product={product} key={i}/>
        //     // each productRow is comingfrom ProductRow.js
        // )
    });
    console.log("temp products",tempProducts)
    let rows = [];
    //reorganize our data so that we can iterate over categories. 
    for(let key in tempProducts){
        // console.log("outter loop",key)
        rows.push(<ProductCategoryRow key={key} header={key}/>) //push the Product Category Row onto rows
        // Map through all the items on this type (ie.)
        tempProducts[key].forEach((product, i)=>{
            // console.log("inner loop", product)
            rows.push(<ProductRow key={key+i}product={product} />) //push this element on the rows. 
        })
    }
    
    // console.log("rows",rows)

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
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable