import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios'
//Bootstrap
import Button from 'react-bootstrap/Button';

const AuthorEdit = ({ style, id }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("")
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState("")

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

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then(res => {
        console.log(res.data)
        setAuthor(res.data)
        setName(res.data.name)
        setLoaded(true);
      })
      .catch(err => {
        console.log("Not Found Error", err.response.data.message)
        setErrors(err.response.data.message)
      })
  }, [])

  console.log("Loaded Author Name", author.name)

  const formHandler = (e) => {
    updateAuthor(e)
  }

  const updateAuthor = (e) => {
    e.preventDefault() // Needs to have within same handler as navigate to work properly
    console.log("New Author", name)
    var updatedAuthor = { name: name };
    axios.put(`http://localhost:8000/api/author/update/${id}`, updatedAuthor)
      .then(res => {
        console.log(res.data)
      })
      // ,then()
      .catch(err => {
        console.log(err.response.data.errors)
      })
  }

  return (
    <div >
      <Link to={`/`}>Home</Link>
      <p style={style}>Edit this author</p>
      {errors !== "" &&
      <div>  
        <p style={{ color: "red" }}>{errors}</p>
        <p>You can create one <Link to={`/`}>here</Link></p>
      </div>
      }
      {loaded &&
        <form style={formStyle} onSubmit={formHandler}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={nameHandler} />
          </div>
          <Button
            variant="primary"
            style={buttonStyle}>
            <Link
              style={{ color: "white" }}
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
      }
    </div>
  )
}

export default AuthorEdit;