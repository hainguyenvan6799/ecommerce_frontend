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

// configs:
import { PATH_NAME } from "configs";

// routes
import PrivateRoute from "shareComponent/PrivateRoute/PrivateRoute";
import GuestRoute from "shareComponent/GuestRoute/GuestRoute";
import ChatRoute from "features/Chat";
import AdminDashboardRoute from "features/AdminDashboard";

const Test = React.lazy(() => import("./features/Test"));

function App() {
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  const { ROOT, LOGIN, PRODUCT, CART, CHAT, TEST, PAYMENT, ADMINDASHBOARD } =
    PATH_NAME;

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

              {/* Private route */}
              <PrivateRoute
                path={ADMINDASHBOARD}
                component={AdminDashboardRoute}
                requireRoles={["ADMIN"]}
              />

              <PrivateRoute
                path={CHAT}
                component={ChatRoute}
                requireRoles={["ADMIN", "GUEST"]}
              />
              <PrivateRoute
                path={TEST}
                component={Test}
                requireRoles={["ADMIN", "GUEST"]}
              />
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
