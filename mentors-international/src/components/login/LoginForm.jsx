import React from "react";
import { Link } from "react-router-dom";

const LoginForm = props => {
  return (
    <form onSubmit={props.logIn}>
      <p>Username</p>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={props.loginInfo.username}
        onChange={props.handleChange}
      />
      <p>Password</p>
      <input
        name="password"
        type="text"
        placeholder="Password"
        value={props.loginInfo.password}
        onChange={props.handleChange}
      />
      <button>Log in</button>
      <Link to="/signup">Sign Up</Link>
    </form>
  );
};

export default LoginForm;
