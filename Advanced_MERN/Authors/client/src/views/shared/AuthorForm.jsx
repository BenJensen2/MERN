import React, { useState } from 'react';
import {Link} from '@reach/router';

const AuthorForm = (props) => {
  // STATE DATA
  const [name, setName] = useState("");

  // HANDLERS
  const nameHandler = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={nameHandler} />
        </div>
        <button><Link style={{textDecoration: "none"}} to={`/`}>Cancel</Link></button>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default AuthorForm;