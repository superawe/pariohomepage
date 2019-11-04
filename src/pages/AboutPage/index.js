import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

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
    document.title = `Pario AB`;
    return (
      <div className="About-container">
        <div className="About-header">
          <h1>About</h1>
        </div>
        <div className="About-main">
          <p>I'm a full stack developer based in Stockholm.</p>
          <p>
            <strong>Main interests;</strong> .Net, c#, Azure-functions,
            Sql-server, NoSql, Azure cloud solutions, API-design, React.
          </p>
          <p>I work as a consultant, for inquires - send me an email.</p>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(AboutPage);
