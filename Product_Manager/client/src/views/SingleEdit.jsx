import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const SingleEdit = ({ id }) => {

  // STATE DATA
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

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


  const updateHandler = (e) => {
    // e.preventDefault(); updates Realtime  might cause issues with validation
    console.log("Update Handler")

    let updatedProduct = {
      _id: product._id,
      title: title,
      price: price,
      description: description
    };

    axios.put(`http://localhost:8000/api/product/update/${id}`, updatedProduct)
      .then(response => {
        console.log("Updated Product")
        console.log(response)
        console.log("Updated Id", updatedProduct._id)
        console.log("Updated Product", updatedProduct)
        setProduct(updatedProduct);
      })
      .catch(err => {
        console.log(err.response.data.errors)
      });

      setTitle(updatedProduct.title);
      setPrice(updatedProduct.price);
      setDescription(updatedProduct.description);

      // Needs to updote setProducts

      // navigate("/");
  }

  return (
    <div>
      <form onSubmit={updateHandler}>
        {loaded && <div>
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
        </div>}
        <input type="submit" value="Update"></input>
      </form>
      <p><Link to={`/product/${product._id}`}>Go Back</Link></p>
    </div>
  )
}

export default SingleEdit;