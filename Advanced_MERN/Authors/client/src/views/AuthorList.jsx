import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
//Bootstrap
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

const AuthorList = ({ style }) => {

  const [authors, setAuthors] = useState()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAuthors();
  }, [])
  
  const sorted=(authorsList)=>{
    
    return authorsList.sort((a, b) => a.name.localeCompare(b.name))    
  }
  const getAuthors = () => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        console.log(res.data)
        setAuthors(sorted(res.data))
        setLoaded(true)
        console.log("Sorted Authors",sorted(res.data))
      })
      .catch(err => {
        console.log(err.response.data.errors)
      })
  };



  const deleteAuthor = (id) => {
    console.log("Delete Handler", id)
    axios.delete(`http://localhost:8000/api/author/${id}`)
    .then(res => {
      console.log(res.data)
      setAuthors(authors.filter((author) => author._id !== id));
    })
    .catch(err => {
      console.log(err.response.data.errors)
    })
  }

  return (
    <div>
      <p><Link to={`/new`}>Add an Author</Link></p>
      <div>
        <Table bordered striped>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              authors.map((author,i) =>
              <tr key={i}>
                <td style={style}>{author.name}</td>
                <td>
                  <Button
                    variant="warning" 
                    style={{ marginRight: "10px" }}>
                      <Link to={`/edit/${author._id}`}>
                        Edit
                      </Link>
                    </Button>
                  <Button 
                    variant="danger" 
                    onClick={()=>deleteAuthor(author._id)}>
                      {/* ^^ sets delete handler to click & passes id */}
                      Delete
                  </Button>
                </td>
              </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default AuthorList;