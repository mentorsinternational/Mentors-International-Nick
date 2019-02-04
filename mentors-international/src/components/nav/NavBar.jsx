import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/message">
        Create Message
      </NavLink>
      <NavLink exact to="/schedule">
        Create Schedule
      </NavLink>
    </nav>
  );
};

export default NavBar;
