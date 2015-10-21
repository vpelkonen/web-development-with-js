import React from 'react';

import Menu from './Menu.js';
import Header from './Header.js';

const MasterApp = React.createClass({
    render: function(){
        return (
            <main>
                <Menu/>
                <Header title="Otsikkohommat"/>
                {this.props.children}
            </main>
        );
    }
});

export default MasterApp;
