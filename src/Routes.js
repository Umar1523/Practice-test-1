
import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Home from "./home/Home";
import history from './history/history';


function Routes  () {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                </Switch>
            </Router>
        )
    }

    export default Routes;