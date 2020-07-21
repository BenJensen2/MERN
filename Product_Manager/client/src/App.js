import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Products from "./views/Products";
import SingleDisplay from "./views/SingleDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/" />
        <SingleDisplay path="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
