import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Word from "../../Word";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div className="About-container">
        <div className="About-header">
          <h1>About</h1>
        </div>
        <div className="About-main">
          I'm a web developer. As you can see I've got other stuff to do than to
          finish this about page.
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(AboutPage);
