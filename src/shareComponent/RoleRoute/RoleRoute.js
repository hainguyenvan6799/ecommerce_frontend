import { PATH_NAME } from "configs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RoleRoute = ({ children, requireRoles }) => {
  const auth = useSelector((state) => state.auth);
  const { role } = auth;
  const history = useHistory();

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH_NAME.NOTFOUND);
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
