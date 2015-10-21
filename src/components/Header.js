import React from 'react';

const Header = React.createClass({
    render: function(){
        return(
            <div className="header">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});

export default Header;
