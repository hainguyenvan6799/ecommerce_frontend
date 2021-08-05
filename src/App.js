import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import LoginRoute from "features/Login";
import HomeRoute from "features/Home";
import ProductRoute from "features/Product";
import CartRoute from "features/Cart";
import PaymentRoute from "features/Payment";

import { useAuth } from "hooks";
import { useResolved } from "hooks/useResolved";

import NotFound from "shareComponent/NotFound/NotFound";
import Header from "shareComponent/Header/Header";

import { TemplateProvider } from "template/TemplateProvider";
import { Box } from "@material-ui/core";
import Chat from "services/chat";

// configs:
import { PATH_NAME } from "configs";

// routes
import PrivateRoute from "shareComponent/PrivateRoute/PrivateRoute";
import GuestRoute from "shareComponent/GuestRoute/GuestRoute";

const Test = React.lazy(() => import("./features/Test"));

function App() {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const { ROOT, LOGIN, PRODUCT, CART, CHAT, TEST, PAYMENT } = PATH_NAME;

  return authResolved ? (
    <div>
      <TemplateProvider>
        <Suspense fallback={<div>...Loading...</div>}>
          <Header />
          <Box style={{ marginTop: 55 }}>
            <Switch>
              {/* <Redirect exact from="/" to="/test" /> */}

              <Route path={ROOT} exact component={HomeRoute} />
              <GuestRoute path={LOGIN} component={LoginRoute} />
              <Route path={PRODUCT} component={ProductRoute} />
              <Route path={CART} component={CartRoute} />
              <Route path={CHAT} component={Chat} />

              <PrivateRoute path={TEST} component={Test} />
              <PrivateRoute
                path={PAYMENT}
                component={PaymentRoute}
                requireRoles={["ADMIN", "GUEST"]}
              />

              <Route component={NotFound} />
            </Switch>
          </Box>
        </Suspense>
      </TemplateProvider>
    </div>
  ) : (
    "...Loading user..."
  );
}

export default App;
