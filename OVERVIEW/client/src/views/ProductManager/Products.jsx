import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, navigate } from "@reach/router";
import Home from "./Home";
import SingleDisplay from "./SingleDisplay";
import SingleEdit from "./SingleEdit";

const Products = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []) // [] stops infinite loop of data response


  const getProducts = () => {
    axios.get("http://localhost:8000/api/allProducts")
      .then(response => {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  const deleteProduct = (id) => {
    console.log(id)
    setProducts(products.filter(product => product._id !== id));
  }

  const deleteHandler = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(response => {
        console.log(response);
        deleteProduct(id);
        navigate("/"); // Need to navigate to homepage
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <Router>
          <Home
          products={products}
          setProducts={setProducts}
          deleteHandler={deleteHandler}
          path = "/"
          />
          <SingleDisplay
            deleteHandler={deleteHandler}
            path="/product/:id" />
          <SingleEdit path="/:id/edit" />
      </Router>
    </div>
  )
}

export default Products;