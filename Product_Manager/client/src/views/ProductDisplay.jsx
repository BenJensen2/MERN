import React from 'react';
import { Link } from '@reach/router';
import Product from './Product';

const ProductDisplay = ({products,deleteHandler}) => {
  return (
    <div>
      {
        products.map((product,i) =>
        <section key = {i}>
          <Product
            product = {product}
            deleteHandler = {deleteHandler}
          />
        </section>
        )
      }
    </div>
  )
}

export default ProductDisplay;