import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactElement;
}
const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const storedLoginData = localStorage.getItem("login");
  const loginData = storedLoginData ? JSON.parse(storedLoginData) : null;
  console.log(loginData);
  if (!loginData) {
    return <Navigate to="/login" replace={true}></Navigate>;
  } else if (loginData?.email) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
