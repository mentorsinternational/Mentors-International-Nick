import React from "react";

const AccountForm = props => {
  return (
    <form>
      <h3>Username</h3>
      <input type="text" placeholder="Username" />
      <h3>Password</h3>
      <input type="text" placeholder="Password" />
    </form>
  );
};

export default AccountForm;
