import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import Menu from './Menu.js';
// Authorize Parse usage
Parse.initialize("D7fRNQ4RFYrtxO8NAxj2zKM9dgIuvPatD1Y4OPR9", "HLaTklBEsuGIeh8WUV5Bu2L5pjgKkyNoV4GadklI");

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
