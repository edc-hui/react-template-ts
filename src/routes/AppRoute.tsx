import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../pages/Login/Login";

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Login}/>
            </Switch>
        </Router>
    )
};


export default AppRoute;