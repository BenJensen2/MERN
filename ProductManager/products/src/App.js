import React from 'react';
import './App.css';
import Router from '@reach/router'
import axios from 'axios';
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
