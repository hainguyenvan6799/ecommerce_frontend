import { Redirect } from "react-router";
import { useSelector } from "react-redux";

// configs
import { PATH_NAME } from "configs";

const GuestGuard = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  if (isAuthenticated) return <Redirect to={PATH_NAME.ROOT} />;

  return <>{children}</>;
};

export default GuestGuard;
