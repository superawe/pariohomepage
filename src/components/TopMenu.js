import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
//import { NavLink } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import * as Scroll from "react-scroll";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class TopMen extends React.Component {
  state = { isTopOfPage: true, expanded: false };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    //this.handleScroll = debounce(1000, this.handleScroll.bind(this)); // Call the function after 250ms of inactivity.
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    const currentYScroll = window.scrollY;

    if (this.state.isTopOfPage && currentYScroll < 10) {
      return;
    }
    if (currentYScroll < 10) {
      this.setState({ isTopOfPage: true });
    } else {
      this.setState({ isTopOfPage: false });
    }
  }

  setExpanded(e) {
    this.setState({ expanded: e });
  }

  render() {
    const { location } = this.props;
    return (
      <Navbar
        fixed="top"
        className={
          "topmenu-navbar " +
          (this.state.isTopOfPage ? "" : "navbar-shrink") +
          " " +
          (this.state.expanded ? "navbar-shrink" : "") +
          " " +
          (!this.state.isTopOfPage || this.state.expanded
            ? ""
            : "navbar-white navbar-dark")
        }
        expand="sm"
        expanded={this.state.expanded}
      >
        {" "}
        {/* missing id mainNav */}
        <Container>
          {location.pathname === "/" && (
            <Scroll.Link
              smooth={true}
              duration={500}
              className="navbar-brand"
              href="#scroll-to-top"
              to="scroll-to-top"
              onClick={() => this.setExpanded(false)}
            >
              PARIO
            </Scroll.Link>
          )}

          {location.pathname !== "/" && (
            <Link
              to="/#scroll-to-top"
              className="navbar-brand"
              activeClassName="is-active"
              smooth
              onClick={() => this.setExpanded(false)}
            >
              PARIO
            </Link>
          )}

          <Navbar.Toggle
            className="navbar-toggler-right"
            aria-controls="responsive-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.setExpanded(!this.state.expanded)}
          />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto">
              {location.pathname !== "/" && (
                <Link
                  to="/#about"
                  className="nav-link"
                  exact={true}
                  isActive={(match, location) => {
                    if (!match) {
                      return false;
                    }
                    if (this.state.aboutInView) {
                      //return true;
                    }
                  }}
                  activeClassName="is-active"
                  smooth
                  onClick={() => this.setExpanded(false)}
                >
                  Om
                </Link>
              )}
              {location.pathname !== "/" && (
                <Link
                  to="/#projects"
                  className="nav-link"
                  activeClassName="is-active"
                  smooth
                  onClick={() => this.setExpanded(false)}
                >
                  Projekt
                </Link>
              )}

              {location.pathname === "/" && (
                <Scroll.Link
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="nav-link"
                  href="#about"
                  to="about"
                  onClick={() => this.setExpanded(false)}
                >
                  Om
                </Scroll.Link>
              )}
              {location.pathname === "/" && (
                <Scroll.Link
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="nav-link"
                  href="#projects"
                  to="projects"
                  onClick={() => this.setExpanded(false)}
                >
                  Projekt
                </Scroll.Link>
              )}
              {location.pathname === "/" && (
                <Scroll.Link
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="nav-link"
                  href="#signup"
                  to="signup"
                  onClick={() => this.setExpanded(false)}
                >
                  Kontakt
                </Scroll.Link>
              )}
              {location.pathname !== "/" && (
                <Link
                  to={`/#signup`}
                  className="nav-link"
                  exact={true}
                  activeClassName="is-active"
                  smooth
                  // etc...
                  onClick={() => this.setExpanded(false)}
                >
                  Kontakt
                </Link>
              )}
              {location.pathname === "/articles" && (
                <Link
                  className="nav-link"
                  to={`/articles`}
                  activeClassName="is-active"
                  scroll={el =>
                    el.scrollIntoView({ behavior: "instant", block: "end" })
                  }
                  onClick={() => this.setExpanded(false)}
                >
                  Artiklar
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const TopMenu = withRouter(TopMen);
export default TopMenu;
