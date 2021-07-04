import React from "react";
import {useSelector} from "react-redux"
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>version 2Congratulations! Your App is live. Start working.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
