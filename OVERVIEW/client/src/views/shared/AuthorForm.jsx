import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
//Bootstrap
import Button from 'react-bootstrap/Button';

const AuthorForm = ({author, setAuthor,formHandler}) => {
  // STATE DATA
  const [name, setName] = useState("");

  // HANDLERS
  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const buttonStyle = {
    marginRight: "10px"
  }

  const divStyle = {
    border: "solid 1px black",
    display: "inline-block",
    padding: "10px"
  }

  
  useEffect(()=>{
    setName(author.name)
    console.log("This is the author",author)
  },[])

  // const authorHandler= (e)=>{
  //   e.preventDefault()
  //   var updatedAuthor = author;
  //   updatedAuthor.name = name;
  //   console.log("updated Author",updatedAuthor)
  //   setAuthor(updatedAuthor);
  //   console.log("Author",author)
  //   formHandler(e)
  // }

  

  return (
    <div style={divStyle}>
      <form onSubmit={formHandler(name)}>
        <div>
          <label>Name</label>
          <input  type="text" value={name} onChange={nameHandler} />
        </div>
        <Button 
          variant="primary" 
          style={buttonStyle}>
          <Link
            style={{color:"white"}}
            to={`/`}>
              Cancel
          </Link>
        </Button>
        <Button 
          type="submit" 
          value="Submit">
            Submit
          </Button>
      </form>
    </div>
  )
}

export default AuthorForm;