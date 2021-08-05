import React from "react";
import { Route } from "react-router-dom";

// guards
import GuestGuard from "guards/GuestGuard/guestGuard";

function GuestRoute({ component: Component, ...rest }) {
  return (
    <GuestGuard>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </GuestGuard>
  );
}

GuestRoute.propTypes = {};

export default GuestRoute;
