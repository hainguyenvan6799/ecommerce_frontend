import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// configs
const { PATH_NAME } = require("configs");

const AuthGuard = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { loading, isAuthenticated } = auth;

  console.log("Hello");

  if (!isAuthenticated) return <Redirect to={PATH_NAME.LOGIN} />;

  return loading ? "...Loading..." : <>{children}</>;
};

export default AuthGuard;
