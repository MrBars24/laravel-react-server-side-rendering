import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';

const AppRouter = () => {
    
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default AppRouter;