import React, { Component } from "react";
import { connect } from "react-redux";

import AccountForm from "../components/account/AccountForm";

import { updateAccount } from "../store/actions";

class AccountView extends Component {
  state = {
    userInfo: {
      name: "",
      password: ""
    },
    userID: localStorage.getItem("userID")
  };

  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  updateAccount = e => {
    e.preventDefault();
    this.props.updateAccount(this.state.userID, this.state.userInfo);
  };

  render() {
    return (
      <div>
        <h1>My Accout</h1>
        <AccountForm
          updateAccount={this.updateAccount}
          userInfo={this.state.userInfo}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { updateAccount }
)(AccountView);
