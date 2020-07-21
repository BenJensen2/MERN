import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductDisplay from './ProductDisplay';

const Products = (props) => {

  const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts();
},[]) // [] stops infinite loop of data response


  const getProducts = () => {
    axios.get("http://localhost:8000/api/products")
    .then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
    .catch(err => {
      console.log(err.response)
    })
  }
  return(
    <div>
      <ProductForm
      products = {products}
      setProducts = {setProducts}/>
      <ProductDisplay
      products = {products}
      />
    </div>
  )
}

export default Products;