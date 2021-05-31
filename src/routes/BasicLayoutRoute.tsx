import React from "react";
import {Switch, Route} from 'react-router-dom';
import BasicLayout from "@/layouts/BasicLayout/BasicLayout";
import Home from "@/pages/Home/Home";
const BasicRoutesPath = '/basic';
const BasicLayoutRoute = () => {
    return (
        <BasicLayout>
            <Switch>
                <Route exact path={`${BasicRoutesPath}/home`} component={Home} />
            </Switch>
        </BasicLayout>
    )
};

export default BasicLayoutRoute;