import React from "react";

const SignupForm = props => {
  return (
    <form onSubmit={props.signUp}>
      <p>Name</p>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={props.newUser.name}
        onChange={props.handleChange}
      />

      <p>Username</p>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={props.newUser.username}
        onChange={props.handleChange}
      />

      <p>Password</p>
      <input
        name="password"
        type="text"
        placeholder="Password"
        value={props.newUser.password}
        onChange={props.handleChange}
      />

      <button>Sign Up</button>
    </form>
  );
};

export default SignupForm;
