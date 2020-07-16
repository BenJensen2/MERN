import React, {useState} from 'react';
import { Link } from '@reach/router';


const Four = (props) => {

  return(
    <div>
      <Link to ="/">Go Home</Link>
      <p>
        <p>
          The Number is: {props.id}
        </p>
        <p>
          The Word is: {props.word}
        </p>
        <p>
          The Color is: <span style={{backgroundColor: `${props.color}`,color:"white"}}> {props.color}</span>
        </p>
      </p>
    </div>
  )
}

export default Four;