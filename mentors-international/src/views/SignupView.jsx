import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    return (
      <div>
        <SignupForm
          newUser={this.state.newUser}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(SignupView);
