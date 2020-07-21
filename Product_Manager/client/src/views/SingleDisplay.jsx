import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const SingleDisplay = ({id}) =>{

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

  return(
    <div>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p><Link to="/">Go Back</Link></p>
    </div>
  )
}

export default SingleDisplay;