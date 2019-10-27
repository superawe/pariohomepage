import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
//import { firebase, helpers } from 'react-redux-firebase'
import { footer } from "../../Actions/Dom";
//const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers
//import ParticleContainer from "../Particles";
import Word from "../../Word";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: {
        a: {
          word: "Web development"
        },
        b: {
          word: "Serverless"
        },
        c: {
          word: "API design"
        },
        d: {
          word: "Cloud architecture"
        },
        e: {
          word: "Consultants"
        },
        f: {
          word: "AI implementations"
        }
      }
    };
  }

  componentDidMount() {
    //this.props.dispatch(footer(true));
  }

  componentWillReceiveProps() {}

  componentWillUnmount() {
    //this.props.dispatch(footer(false));
  }
  render() {
    const { words } = this.state;
    document.title = `Pario AB`;
    return (
      <div className="Landing-container">
        <div className="Landing-overlay"></div>
        <div className="Landing-about">
          <h1>Pario</h1>
          <div className="Word-container">
            <Word words={words} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(HomePage);
