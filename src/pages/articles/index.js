import React, { Component } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ArticleBox from "../../components/ArticleBox";

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
        <Section
          name="articles"
          classList="text-center"
          html={
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="text-white-50">
                    A collection of thoughts and experiments
                  </p>
                </div>
              </div>
            </div>
          }
        ></Section>
        <section id="articlelist" name="articlelist" className="articlelist">
          <div className="container">
            <div className="row mb-4 mb-lg-5 articlebox">
              <ArticleBox
                headline="Serverless"
                abstract="My thoughts on serverless computing, the whats and whys"
                articleid="serverless"
                image="serverlesslogos.jpg"
              ></ArticleBox>
              <ArticleBox
                headline="Serving static content"
                abstract="Simple, affordable and scalable ways to serve static html"
                articleid="staticcontent"
                image="ipad_white.png"
              ></ArticleBox>
              <ArticleBox
                headline="Serverless API"
                abstract="Using Azure functions to build a scalable API"
                articleid="serverlessapi"
                image="serverlesslogos1.jpg"
              ></ArticleBox>
            </div>
          </div>
        </section>

        <footer className="bg-black small text-center text-white-50">
          <div className="container">Copyright &copy; Your Website 2019</div>
        </footer>
      </div>
    );
  }
}

export default StartPage;
