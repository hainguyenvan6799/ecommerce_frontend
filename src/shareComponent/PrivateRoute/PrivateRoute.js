import React from "react";
import { Route } from "react-router-dom";

// guards
import AuthGuard from "guards/AuthGuard/authGuard";

// routes
import RoleRoute from "shareComponent/RoleRoute/RoleRoute";

function PrivateRoute({ component: Component, requireRoles, ...rest }) {
  return (
    <AuthGuard>
      <RoleRoute requireRoles={requireRoles}>
        <Route {...rest} render={(props) => <Component {...props} />} />
      </RoleRoute>
    </AuthGuard>
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
