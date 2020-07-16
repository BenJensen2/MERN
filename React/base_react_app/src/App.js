// import React from 'react';
import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Welcome from './components/Routing/Welcome'
// import Hook from './components/Hook/Hook'
import Box from './components/Box/Box'
// import Tabs from './components/Tab/Tabs'
import ToDo from './components/ToDo/ToDo'
import PokeAPI from './components/Pokemon/PokeAPI'
import Four from './components/Routing/Four'

function App() {

  // const [pokemon,setPokemon] = useState("")

  return (
    <div className="App">
      
      <Router>
        <Box path="/boxes"/>
        <Welcome path="//"/>
        <Four path ="/:id/:word/:color" />
        {/* <Tabs path="/tabs"/> */}
        <PokeAPI path="/pokemon"/>
        <ToDo path="/todo"/>
      </Router>
    </div>
  );
}

export default App;
