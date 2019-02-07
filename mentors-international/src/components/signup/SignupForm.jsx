import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupFormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
`;

const SignupInputs = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const SignupTitles = styled.h3`
  margin-bottom: 10px;
`;

const SignupBtn = styled.button`
  background: none;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 12px 45px;
  width: 100%;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 25px;
  transition: background 0.2s ease;
  font-size: 18px;

  &:hover {
    background: #53b8e8;
  }
`;

const LoginBtn = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupForm = props => {
  return (
    <SignupFormWrapper onSubmit={props.signUp}>
      <SignupTitles>Name</SignupTitles>
      <SignupInputs
        name="name"
        type="text"
        placeholder="Name"
        value={props.newUser.name}
        onChange={props.handleChange}
      />

      <SignupTitles>Username</SignupTitles>
      <SignupInputs
        name="username"
        type="text"
        placeholder="Username"
        value={props.newUser.username}
        onChange={props.handleChange}
      />

      <SignupTitles>Password</SignupTitles>
      <SignupInputs
        name="password"
        type="text"
        placeholder="Password"
        value={props.newUser.password}
        onChange={props.handleChange}
      />

      <SignupBtn>Sign Up</SignupBtn>
      <LoginBtn to="/login">Go to Login</LoginBtn>
    </SignupFormWrapper>
  );
};

export default SignupForm;
