import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import CharacterList from './CharacterList';

// MENU / SIDEBAR WRAPPER
const Menu = React.createClass({
    render: function () {
        return (
            <div className="menu">
                <Link to="/" className="logo"></Link>
                <CharacterList/>
            </div>
        );
    }
});

export default Menu;
