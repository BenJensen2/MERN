import React from 'react';
import {Router} from '@reach/router';
import AuthorList from './AuthorList'
import AuthorNew from './AuthorNew';
import AuthorEdit from './AuthorEdit';


const AuthorsProject = (props)=> {
  return(
    <div>
      <h1>Favorite authors</h1>
      <Router>
        <AuthorList
          path="/"
        />
        <AuthorNew
          path="/new"
        />
        <AuthorEdit
          path="/edit"
        />
      </Router>
    </div>
  )
}

export default AuthorsProject;