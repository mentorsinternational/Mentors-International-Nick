import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginFormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
`;

const LoginInputs = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const LoginTitles = styled.h3`
  margin-bottom: 10px;
`;

const LoginBtn = styled.button`
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

const SignUpBtn = styled(Link)`
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

const LoginForm = props => {
  return (
    <LoginFormWrapper onSubmit={props.logIn}>
      <LoginTitles>Username</LoginTitles>
      <LoginInputs
        name="username"
        type="text"
        placeholder="Username"
        value={props.loginInfo.username}
        onChange={props.handleChange}
      />
      <LoginTitles>Password</LoginTitles>
      <LoginInputs
        name="password"
        type="password"
        placeholder="Password"
        value={props.loginInfo.password}
        onChange={props.handleChange}
      />
      <LoginBtn>Log in</LoginBtn>
      <SignUpBtn to="/signup">Sign Up</SignUpBtn>
    </LoginFormWrapper>
  );
};

export default LoginForm;
