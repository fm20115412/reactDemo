import React from 'react';
import { BrowserRouter as Router, Route, HashRouter ,Link } from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';

const routes = (
    <HashRouter>
        <Frame>
            <Route exact path= '/' component={Home}/>
            <Route path ='/detail/:id' component ={Detail} />
        </Frame>
    </HashRouter>
);
export default routes;