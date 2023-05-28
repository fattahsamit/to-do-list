import { NavLink } from "react-router-dom";

interface PrivateRouteProps {
  children: string;
  to: string;
}

const ActiveLink = ({ children, to }: PrivateRouteProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-primary" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
