import './client.css';
import '../node_modules/normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { VelocityTransitionGroup } from 'velocity-react';
import { createHistory } from 'history';
const history = createHistory();

/*===[ Get components ]===*/
import App from './components/App';
import Home from './components/Home';
import Character from './components/Character';
import FourOhFour from './components/FourOhFour';

//Parse.initialize("D7fRNQ4RFYrtxO8NAxj2zKM9dgIuvPatD1Y4OPR9", "HLaTklBEsuGIeh8WUV5Bu2L5pjgKkyNoV4GadklI");

const routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="character/:name" component={Character}/>
            <Route path="*" component={FourOhFour}/>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
