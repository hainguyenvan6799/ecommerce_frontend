import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";

function PaymentRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.url} component={PaymentPage} />
    </Switch>
  );
}

export default PaymentRoute;
