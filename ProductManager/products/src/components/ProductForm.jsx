import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

  // STATE DATA
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // HANDLERS
  const titleHandler = (e) => {
    setTitle(e.target.value)
  }

  const priceHandler = (e) => {
    setPrice(e.target.value)
  }

  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }


  const productHandler = (e) => {
    e.preventDefault();
    console.log("Product Handler")
    let newProduct = {
      title: title,
      price: price,
      description: description
    }

    axios.post("http://localhost:8000/api/product/new",newProduct)
    .then(response => {console.log(response)})
    .catch(err => {
      console.log(err.response.data.errors)});
    setTitle("")
    setPrice("")
    setDescription("")
  }

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={productHandler}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={priceHandler} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={descriptionHandler} />
        </div>
        <input type="submit" value="Create"></input>
      </form>
    </div>
  )
}

export default ProductForm;