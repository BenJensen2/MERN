import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios'
//Bootstrap
import Button from 'react-bootstrap/Button';

const AuthorNew = ({author,setAuthor,style}) => {
    // STATE DATA
    const [name, setName] = useState("");
    const [errors,setErrors] = useState("")

    // HANDLERS
    const nameHandler = (e) => {
      setName(e.target.value)
    }
  
    const buttonStyle = {
      marginRight: "10px"
    }
  
    const formStyle = {
      border: "solid 1px black",
      display: "inline-block",
      padding: "10px"
    }

    const formHandler =(e) => {
      createAuthor(e)
    }

  const createAuthor = (e) => {
    e.preventDefault()
    console.log("New Author",name)
    var newAuthor = {name:name};
    axios.post("http://localhost:8000/api/author/new",newAuthor)
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      // ,then()
      .catch(err => {
        console.log("Error",
        err.response.data.errors)
        console.log("Error",
        err.response.data.errors.name.properties.message)
        setErrors(err.response.data.errors.name.properties.message)
      })
    }
    
    console.log("setErrors",errors)


  return (
    <div >
      <Link to={`/`}>Home</Link>
      <p style={style}>Add a new author:</p>
      <form style={formStyle} onSubmit={formHandler}>
        <div>
          <label>Name
            {errors !=="" &&
            <span style={{color:"red"}}> {errors}</span>
            }
          </label>
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

export default AuthorNew;