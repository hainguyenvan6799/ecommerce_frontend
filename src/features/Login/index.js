import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NotFound from 'shareComponent/NotFound/NotFound';
import Login from './pages/Login';

function LoginRoute() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={Login} />

            <Route component={NotFound}/>
        </Switch>
    )
}

export default LoginRoute
