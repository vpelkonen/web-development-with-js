import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import ActionButton from './ActionButton';
import api from '../api';


// MENU / SIDEBAR WRAPPER
const Menu = React.createClass({
    getInitialState: function(){
        return {
            names: []
        }
    },
    componentDidMount: function(){
        api.getTussit().then((data) => {
            this.setState({
                names:data
            });
        });
    },
    render: function () {
        const names = this.state.names;
        return (
            <div className="menu">
                <Link to="/" className="logo"></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {this.state.names.map((name, i) =>
                        <li><Link to={`/hello/${name}`}>{name}!</Link></li>
                    )}
                </ul>
                <ActionButton/>
            </div>
        );
    }
});

export default Menu;
