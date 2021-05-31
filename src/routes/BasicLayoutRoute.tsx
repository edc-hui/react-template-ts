import React from "react";
import {Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component';
import BasicLayout from "@/layouts/BasicLayout/BasicLayout";

const BasicRoutesPath = '/basic';

const Home = loadable(() => import('@/pages/Home/Home'));

const BasicLayoutRoute: React.FC<any> = () => {
    return (
        <BasicLayout>
            <Switch>
                <Route exact path={`${BasicRoutesPath}`} component={Home}/>
                <Route path={`${BasicRoutesPath}/home`} component={Home}/>
            </Switch>
        </BasicLayout>
    )
};

export default BasicLayoutRoute;