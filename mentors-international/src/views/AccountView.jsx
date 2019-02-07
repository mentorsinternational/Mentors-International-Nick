import React, { Component } from "react";
import { connect } from "react-redux";

import AccountForm from "../components/account/AccountForm";

class AccountView extends Component {
  render() {
    return (
      <div>
        <h1>My Accout</h1>
        <AccountForm />
      </div>
    );
  }
}

export default connect()(AccountView);
