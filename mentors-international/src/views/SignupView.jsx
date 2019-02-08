import React, { Component } from "react";
import { connect } from "react-redux";

import { signUp } from "../store/actions";

import SignupForm from "../components/signup/SignupForm";

class SignupView extends Component {
  state = {
    newUser: {
      name: "",
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  signUp = e => {
    e.preventDefault();
    this.props.signUp(this.state.newUser);
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SignupForm
          newUser={this.state.newUser}
          handleChange={this.handleChange}
          signUp={this.signUp}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { signUp }
)(SignupView);
