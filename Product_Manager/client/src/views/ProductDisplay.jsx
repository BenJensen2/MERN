import React from 'react';
import Product from './Product';

const ProductDisplay = ({products}) => {
  return (
    <div>
      {
        products.map((product,i) =>
        <section key = {i}>
          <Product
            product = {product}
            idx = {i}
          />
        </section>
        )
      }
    </div>
  )
}

export default ProductDisplay;