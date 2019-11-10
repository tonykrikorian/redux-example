import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as personActions from "../../redux/actions/personActions";

class Persons extends Component {
  state = {
    person: {
      name: "",
      email: ""
    }
  };
  render() {
    return <React.Fragment></React.Fragment>;
  }
}

//mapDispatchToProps binding Action Creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    persons: state.person
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
