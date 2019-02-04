import React, { Component } from "react";

import LoginForm from "../components/login/LoginForm";

class LoginView extends Component {
  state = {
    loginInfo: {
      username: "",
      password: "",
      phone: ""
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

  render() {
    return (
      <div>
        <h1>Login View</h1>
        <LoginForm
          loginInfo={this.state.loginInfo}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LoginView;
