import React from 'react';



function ProductRow(props){
    let productClass = ""
    if(!props.product.inStock){
        productClass = "text-danger"
    }
    return(
            <tr>
                <td className={productClass}>{props.product.name}</td>
                <td className={productClass}>{props.product.price}</td>
            </tr>    )
};

export default ProductRow;