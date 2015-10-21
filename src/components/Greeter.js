import React from 'react';

const Greeter = React.createClass({
    render: function(){
        return(
            <h2 className="hello">Terve {this.props.params.name}</h2>
        );
    }
});

export default Greeter;
