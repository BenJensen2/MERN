import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorsProject from "./views/Authors/AuthorsProject";
import PersonForm from "./views/PersonForm/PersonForm";
import Products from "./views/ProductManager/Products";

import AuthorNew from "./views/Authors/AuthorNew";

function App() {
  return (
    <div className="App">
      <h2>This is the MERN Overview</h2>
      <ul>
        <li>
          <a href="/Authors">Authors</a>
        </li>
        <li>
          <a href="/PersonForm">People</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
      </ul>
      <Router>
        <AuthorsProject path="/Authors/*"/>
          {/* /Authors/* is for further routing in the child components */}
        <PersonForm path="/PersonForm/*" />
        <Products path="/Products/*"/>
      </Router>
    </div>
  );
}

export default App;
