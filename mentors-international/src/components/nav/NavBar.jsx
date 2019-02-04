import React from "react";
import { NavLink } from "react-router-dom";
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

const NavBar = props => {
  return (
    <NavBarWrapper>
      <NavLinks exact to="/">
        Home
      </NavLinks>
      <NavLinks exact to="/message">
        Create Message
      </NavLinks>
      <NavLinks exact to="/schedule">
        Create Schedule
      </NavLinks>
    </NavBarWrapper>
  );
};

export default NavBar;
