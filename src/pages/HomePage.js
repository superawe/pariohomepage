import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

export default function HomePage() {
  return (
    <div className="container">
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
        <p>
          <Link to="/about">About</Link>
        </p>
      </header>
    </div>
  );
}
