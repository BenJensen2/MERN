import React from 'react';
import ProductForm from './ProductForm';
import ProductDisplay from './ProductDisplay';



const Home = ({products, setProducts, deleteHandler}) => {
  return (
    <div>
      <ProductForm
        products={products}
        setProducts={setProducts}
      />
      <ProductDisplay
        products={products}
        deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default Home;