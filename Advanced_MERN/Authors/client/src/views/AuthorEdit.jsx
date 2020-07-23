import React from 'react';
import {Link} from '@reach/router';
import AuthorForm from './shared/AuthorForm'

const AuthorEdit = (props) => {
  return(
    <div>
      <Link to={`/`}>Home</Link>
      <AuthorForm/>
    </div>
  )
}

export default AuthorEdit;