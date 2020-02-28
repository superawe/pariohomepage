import React, { Component } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";

class StartPage extends Component {
  componentDidMount(prevProps) {
    /**
     * Always scroll to top of page on route change
     */
    //if (prevProps.location.pathname !== this.props.location.pathname) {
    window.scrollTo(0, 0);
    //}
  }
  render() {
    return (
      <div id="home">
        <Header
          title="Pario AB"
          text={
            <span>
              Articles
              <a
                href="https://startbootstrap.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Start Bootstrap
              </a>
            </span>
          }
          buttonLabel="Get Started"
        ></Header>

        <Section
          name="about"
          classList="text-center"
          html={
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-white mb-4">Articles</h2>
                  <p className="text-white-50">
                    Articles . The theme is open source, and you can use it for
                    any purpose, personal or commercial.
                  </p>
                </div>
              </div>
              <img src="assets/img/ipad.png" className="img-fluid" alt=""></img>
            </div>
          }
        ></Section>

        <footer className="bg-black small text-center text-white-50">
          <div className="container">Copyright &copy; Your Website 2019</div>
        </footer>
      </div>
    );
  }
}

export default StartPage;
