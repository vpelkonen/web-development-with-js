import '../node_modules/normalize.css/normalize.css';
import './client.css';
import history from './history';

import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { VelocityTransitionGroup } from 'velocity-react';

/*===[ Get components ]===*/
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import Character from './components/Character';
import FourOhFour from './components/FourOhFour';

Parse.initialize("D7fRNQ4RFYrtxO8NAxj2zKM9dgIuvPatD1Y4OPR9", "HLaTklBEsuGIeh8WUV5Bu2L5pjgKkyNoV4GadklI");

const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="home" component={Home}/>
            <Route path="character/:name" component={Character}/>
            <Route path="*" component={FourOhFour}/>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
