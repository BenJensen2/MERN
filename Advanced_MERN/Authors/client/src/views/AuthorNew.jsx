import React from 'react';
import {Link} from '@reach/router';
import AuthorForm from './shared/AuthorForm'

const AuthorNew = (props) => {
  return(
    <div>
      <Link to={`/`}>Home</Link>
      <AuthorForm/>
    </div>
  )
}

export default AuthorNew;