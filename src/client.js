import './client.css';
import '../node_modules/normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { VelocityTransitionGroup } from 'velocity-react';

/*===[ Get components ]===*/
import MasterApp from './components/MasterApp';
import Content from './components/Content';
import Greeter from './components/Greeter';
import FourOhFour from './components/FourOhFour';


const routes = (
    <Router>
        <Route path="/" component={MasterApp}>
            <IndexRoute component={Content} />
            <Route path="hello/:name" component={Greeter} />
            <Route path="*" component={FourOhFour} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
