import React from 'react';
import Menu from './Menu.js';

const App = React.createClass({
    render: function(){
        return (
            <div className="pololololol">
                <Menu/>
                {this.props.children}
            </div>
        );
    }
});

export default App;
