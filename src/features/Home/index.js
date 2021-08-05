import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function HomeRoute() {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={match.url} exact component={HomePage} />
      </Switch>
    </>
  );
}

export default HomeRoute;
