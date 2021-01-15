import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthorsProject from "./views/Authors/AuthorsProject";
import PersonForm from "./views/PersonForm/PersonForm";

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
      </ul>
      <Router>
        <AuthorsProject path="/Authors/*"/>
          {/* /Authors/* is for further routing in the child components */}
        <PersonForm path="/PersonForm/*" />
      </Router>
    </div>
  );
}

export default App;
