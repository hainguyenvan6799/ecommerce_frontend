import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "shareComponent/NotFound/NotFound";
import TestPage from "./pages/TestPage/TestPage";

function TestRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={TestPage} />

      {/* <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default TestRoute;
