import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainProduct from "./pages/MainProduct";
import ProductDetailPage from "./pages/ProductDetail";

function ProductRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.url} exact component={MainProduct} />

      <Route path={`${match.url}/:id`} component={ProductDetailPage} />
    </Switch>
  );
}

export default ProductRoute;
