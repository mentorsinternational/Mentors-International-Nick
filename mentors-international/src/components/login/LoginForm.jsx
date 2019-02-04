import React from "react";

const LoginForm = props => {
  return (
    <form>
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
    </form>
  );
};

export default LoginForm;
