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

  handleChange = event => {
    const person = { ...this.state.person };
    person[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ person });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.actions.addPerson(this.state.person);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <label>Name: </label>
            <br />
            <input type="text" name="name" onChange={this.handleChange}></input>
            <br />
            <br></br>
            <label>Email: </label>
            <br />
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
            ></input>
            <br />
            <br />
            <button type="submit">Grabar</button>
            <br />
            <div>
              {this.props.persons.map(x => (
                <p key={x.name}>{x.name}</p>
              ))}
            </div>
          </form>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

//mapDispatchToProps binding Action Creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

function mapStateToProps(state) {
  console.log(state);
  return {
    persons: state.persons
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
