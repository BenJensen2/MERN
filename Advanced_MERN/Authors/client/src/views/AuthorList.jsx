import React from 'react';
import {Link} from '@reach/router';

const AuthorList = (props) => {
  return(
    <div>
      <p><Link to={`/new`}>Add an Author</Link></p>
      <div>
        {/* mapping through authors: Table
        id to each link & buttons */}
        <p style={{marginRight: "10px"}} >Bill Bryson</p>
        <button style={{marginRight: "10px"}} ><Link to={`/edit`}>Edit</Link></button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default AuthorList;