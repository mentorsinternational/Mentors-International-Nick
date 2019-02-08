import React from "react";
import styled from "styled-components";

const AccountFormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
`;

const AccountInputs = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const AccountTitles = styled.h3`
  margin-bottom: 10px;
`;

const UpdateInfoBtn = styled.button`
  background: none;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 15px 45px;
  width: 100%;
  background: #62cdff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 25px;
  transition: background 0.2s ease;

  &:hover {
    background: #53b8e8;
  }
`;

const AccountForm = props => {
  return (
    <AccountFormWrapper>
      <AccountTitles>New Name</AccountTitles>
      <AccountInputs
        type="text"
        placeholder="Name"
        value={props.userInfo.name}
        name="name"
        onChange={props.handleChange}
      />
      <AccountTitles>New Password</AccountTitles>
      <AccountInputs
        type="text"
        placeholder="Password"
        value={props.userInfo.password}
        name="password"
        onChange={props.handleChange}
      />
      <UpdateInfoBtn onClick={props.updateAccount}>Update Info</UpdateInfoBtn>
    </AccountFormWrapper>
  );
};

export default AccountForm;
