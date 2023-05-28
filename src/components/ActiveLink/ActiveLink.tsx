import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-red-400" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
