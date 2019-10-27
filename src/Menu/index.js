import React from "react";
import { NavLink } from "react-router-dom";
import { throttle, debounce } from "lodash";
import { pBurger } from "../Actions/Burger";
import { connect } from "react-redux";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTop: true,
      previousTop: window.pageYOffset
    };
    this.scrollyMacScrollFace = throttle(
      this.scrollyMacScrollFace.bind(this),
      250
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollyMacScrollFace, true);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollyMacScrollFace, true);
  }

  scrollyMacScrollFace() {
    const { previousTop } = this.state;
    if (window.pageYOffset > 0) {
      // <-- Man är inte högst upp på sidan
      var currentOffTop = window.pageYOffset;
      if (currentOffTop > previousTop && window.pageYOffset > 130) {
        this.setState({ pageTop: false });
      } else {
        this.setState({ pageTop: true });
      }
      this.setState({ previousTop: currentOffTop });
    } else {
      this.setState({ pageTop: true });
    }
  }

  closeMenu() {
    if (this.props.burger) {
      this.props.dispatch(pBurger(true));
    }
  }
  render() {
    const { pageTop } = this.state;
    const { pathname } = this.props;
    return (
      <header className={pageTop ? "Header" : "Header is-hidden"}>
        <menu className="Menu">
          <ul className="Menu-list" onClick={this.closeMenu.bind(this)}>
            <li>
              <NavLink to={`/`} exact activeClassName="is-active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`} activeClassName="is-active">
                About
              </NavLink>
            </li>
          </ul>
          <NavLink
            to={`/`}
            className="Header-logo"
            onClick={this.closeMenu.bind(this)}
          ></NavLink>
        </menu>
      </header>
    );
  }
}

export default connect(state => ({ burger: state.burger.portfolioBurger }))(
  Menu
);
