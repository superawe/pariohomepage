import React from "react";
import { connect } from "react-redux";
import { pBurger } from "../../Actions/Burger";
class Burger extends React.Component {
  toggleBurger(state) {
    console.log(state);
    this.props.dispatch(pBurger(state));
  }
  render() {
    const { burger } = this.props;
    const state = burger.portfolioBurger;
    return (
      <div
        className={state ? "Burger-container is-open" : "Burger-container"}
        onClick={() => this.toggleBurger(state)}
      >
        <div className="Burger-inner">
          <div className="Burger"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    burger: state.burger
  };
};
export default connect(mapStateToProps)(Burger);
