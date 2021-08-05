import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);
  const { loading, isAuthenticated } = auth;

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          "...Loading..."
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
