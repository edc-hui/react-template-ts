import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../pages/Login/Login";
import BasicLayoutRoute from "@/routes/BasicLayoutRoute";
import store from "@/store";
const {Provider} = store;

const AppRoute = () => {
    return (
        <Provider>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Login}/>
                    <Route path="/basic" component={BasicLayoutRoute}/>
                </Switch>
            </Router>
        </Provider>
    )
};


export default AppRoute;