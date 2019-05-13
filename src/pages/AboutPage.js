import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>
        <Link to="/">Home</Link>.
      </p>
    </div>
  );
}
