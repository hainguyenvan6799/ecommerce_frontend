import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function ChatRoute() {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={match.url} exact component={ChatPage} />
      </Switch>
    </>
  );
}

export default ChatRoute;
