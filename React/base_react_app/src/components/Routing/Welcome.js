import React from 'react';
import { Link } from '@reach/router';

const Welcome = (props) => {
  return(
    <div>
      <h1>
        Welcome to my projects
      </h1>
      <p>
        <Link to = "/boxes">Boxes</Link>
      </p>
      <p>
        <Link to = "/pokemon">Pokemon</Link>
      </p>
      <p>
        <Link to = "/todo">To Do List</Link>
      </p>
      <p>
        <Link to = "/4/hello/blue">Four</Link>
      </p>
    </div>
  )
}

export default Welcome;