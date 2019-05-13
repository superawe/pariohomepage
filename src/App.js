import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Home of Pario AB</p>
          <a
            className="App-link"
            href="https://bodhiapp.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try out bodhi app
          </a>
        </header>
      </div>
    );
  }
}

export default App;
