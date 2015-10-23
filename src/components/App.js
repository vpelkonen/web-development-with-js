import React from 'react';

const App = React.createClass({
    render: function(){
        return (
            <div className="componentWrapper">
                {this.props.children}
            </div>
        );
    }
});

export default App;
