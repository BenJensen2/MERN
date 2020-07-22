import React from 'react';
import { Link,} from '@reach/router';

const Product = ({product,deleteHandler})=>{

//   const deleteHandler = (id) => {
//     console.log(id)
//     axios.delete(`http://localhost:8000/api/product/${id}`)
//         .then(response => {
//             console.log(response);
//             deleteProduct(id);
//           })
//         .catch(err => {
//             console.log(err);
//         })
// }
  return(
    <div>
      <p> <Link to={`/product/${product._id}`}>{product.title}</Link></p>
      <ul>
        <li> {product.price}</li>
        <li> {product.description}</li>
      </ul>
      <button style={{marginRight:'10px'}} onClick={(e) => { deleteHandler(product._id) }}>Delete</button>
      <button><Link to={`/${product._id}/edit`} style={{textDecoration:"none"}}>Edit</Link></button>
    </div>
  )
}

export default Product;