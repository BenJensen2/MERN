import React, { useState, useEffect } from "react";
import { Link } from '@reach/router';
const PokeAPI = (props) => {
  const [pokedata, setPokedata] = useState("");


  const getPokemon = () =>{
    let apiUrl = "https://pokeapi.co/api/v2/pokemon";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokedata(response)
        console.log(pokedata.results);
      })
      .catch((err) => {
        console.log(err);
      });

      // console.log(pokedata)
  };
  const fetchHandler = (e) => {
    getPokemon();
    // let count = response.count;
    // console.log(count)
    
    
}

  const [people, setPeople] = useState([]);

  useEffect(() => {
    // getPokemon();
    
  });

  return (
    <div>
      <p>
        <Link to ="/">Go Home</Link>
      </p>
      <button onClick={fetchHandler}>Fetch</button>
    </div>
  );
};

export default PokeAPI;
