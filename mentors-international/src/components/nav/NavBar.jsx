import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  position: fixed;
  background: rgba(0, 0, 0, 0.66);
  padding: 15px;
  width: 100vw;
  top: 0px;
  text-align: right;
`;

const NavLinks = styled(NavLink)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &.active {
    color: #62cdff;
  }
`;

const LogoutBtn = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
`;

const NavBar = props => {
  const logOut = _ => {
    localStorage.removeItem("userID");
    localStorage.removeItem("jwt");
  };

  return (
    <NavBarWrapper>
      <NavLinks exact to="/">
        Home
      </NavLinks>
      <NavLinks exact to="/reminder">
        Create Reminder
      </NavLinks>
      <NavLinks exact to="/mentees">
        Add Mentee
      </NavLinks>
      {localStorage.getItem("jwt") && (
        <NavLinks to="/account">Account</NavLinks>
      )}
      {localStorage.getItem("jwt") && (
        <LogoutBtn to="/login" onClick={logOut}>
          Log Out
        </LogoutBtn>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
