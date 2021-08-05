import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CartPage from "./pages/CartPage";

function CartRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.url} exact component={CartPage} />
    </Switch>
  );
}

export default CartRoute;
