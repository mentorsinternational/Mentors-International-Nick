import React, { Component } from "react";
import { connect } from "react-redux";

import { logIn } from "../store/actions";

import LoginForm from "../components/login/LoginForm";

class LoginView extends Component {
  state = {
    loginInfo: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.loginInfo);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm
          loginInfo={this.state.loginInfo}
          handleChange={this.handleChange}
          logIn={this.logIn}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { logIn }
)(LoginView);
