import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav>
      <h2>nav</h2>
      <ul>
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/app">To-Do-List</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/signup">Signup</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
