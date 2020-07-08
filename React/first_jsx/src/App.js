import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Finish my resume</li>
        <li>Apply to jobs</li>
        <li>create Python Email Cleanup tool</li>
      </ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
