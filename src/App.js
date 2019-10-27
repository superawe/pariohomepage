import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import HomePage from "./pages/HomePage/";
import AboutPage from "./pages/AboutPage";
import Footer from "./Footer";
import { connect } from "react-redux";

import Burger from "./GlobalComponents/Burger";
import Menu from "./Menu";

class Portfolio extends React.Component {
  render() {
    const { burger, isFixed, location } = this.props;
    return (
      <div
        className={
          burger && !isFixed
            ? "Portfolio-container menu-open"
            : isFixed
            ? "Portfolio-container is-fixed"
            : "Portfolio-container"
        }
      >
        <Burger />
        <Menu pathname="" />
        <main className="Main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    burger: state.burger.portfolioBurger,
    isFixed: state.dom.siteFixed
  };
};
export default connect(mapStateToProps)(Portfolio);
