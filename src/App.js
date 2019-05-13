import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={HomePage} />
    </Switch>
  );
}
