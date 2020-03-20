import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import TopMenu from "./components/TopMenu";
import StartPage from "./pages/startpage";
import ArticlesOverviewPage from "./pages/articlesoverview";
import ArticlesServerlessPage from "./pages/articles/serverless";
import ArticlePage from "./pages/articles";

function App() {
  return (
    <div id="home">
      <TopMenu></TopMenu>

      <main className="Main-container">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/start" component={StartPage} />
          <Route exact path="/articles" component={ArticlesOverviewPage} />
          <Route
            exact
            path="/articles/serverless"
            component={ArticlesServerlessPage}
          />
          <Route path="/articles/:slug" component={ArticlePage} />

          <Route component={StartPage} />
        </Switch>
      </main>

      <footer className="bg-black small text-center text-white-50">
        <div className="container">Copyright &copy; Pario AB 2020</div>
      </footer>
    </div>
  );
}

export default App;
