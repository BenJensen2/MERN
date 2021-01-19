import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const SingleDisplay = ({ id,deleteHandler }) => {

  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      {loaded && <div>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button style={{marginRight:'10px'}} onClick={(e) => { deleteHandler(product._id) }}>Delete</button>
        <button><Link to={`/${product._id}/edit`} style={{ textDecoration: "none" }}>Edit</Link></button>
      </div>}
      <p><Link to="/">Go Back</Link></p>
    </div>
  )
}

export default SingleDisplay;