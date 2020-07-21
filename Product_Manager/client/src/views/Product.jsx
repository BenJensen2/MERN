import React from 'react';
import { Link } from '@reach/router';

const Product = ({product,idx})=>{
  return(
    <div>
      <p> <Link to={`/product/${product._id}`}>{product.title}</Link></p>
      <ul>
        <li> {product.price}</li>
        <li> {product.description}</li>
      </ul>
    </div>
  )
}

export default Product;