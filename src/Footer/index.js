import React from "react";
import Scroll from "react-scroll";
import { connect } from "react-redux";

class Footer extends React.Component {
  scrollTop() {
    Scroll.animateScroll.scrollTo(0, {
      duration: 300
    });
  }
  render() {
    const { landingPage } = this.props;
    return (
      <footer
        className={
          landingPage ? "Footer Footer--white" : "Footer Footer--color"
        }
      >
        <div className="Footer-inner">
          <div onClick={this.scrollTop} className="Footer-backtotop">
            <span>
              <i className="flaticon-next"></i>Back to top
            </span>
          </div>
          <div className="Footer-columns">
            <div className="Footer-left">
              <div>
                <h3>Contact</h3>
                <ul>
                  <li>
                    <a
                      href="tel:0736001370"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-technology"></i> 0736001370
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:arvid@pario.se"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-mail"></i> arvid@pario.se
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sv.wikipedia.org/wiki/Stockholm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flaticon-placeholder"></i> Stockholm
                    </a>
                  </li>
                </ul>
                <div className="Footer-icons">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="Footer-icon Footer-icon--linkedin"></figure>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="Footer-icon Footer-icon--github"></figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="Footer-right">
              <div className="Footer-face"></div>
              <p>Web consultant and startup guy based in Stockholm</p>
            </div>
          </div>
          <p className="Footer-copy">Pario AB</p>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = state => {
  return {
    landingPage: state.dom.landingPage
  };
};
export default connect(mapStateToProps)(Footer);
