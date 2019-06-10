import React from 'react';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
    <HashRouter>
        <Route path='/' component={Home}/>
    </HashRouter>
);
export default routes;