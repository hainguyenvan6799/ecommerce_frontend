import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// configs
const { PATH_NAME } = require("configs");

const AuthGuard = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { loading, isAuthenticated } = auth;

  // if (!isAuthenticated) return <Redirect to={PATH_NAME.LOGIN} />;

  return loading ? (
    "...Loading..."
  ) : !isAuthenticated ? (
    <Redirect to={PATH_NAME.LOGIN} />
  ) : (
    <>{children}</>
  );
};

export default AuthGuard;
