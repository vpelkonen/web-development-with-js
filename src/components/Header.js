import React from 'react';
import HelloTitle from './HelloTitle';


const Header = React.createClass({
    render: function(){
        return(
            <div className="header">
                <HelloTitle name={this.props.title} />
            </div>
        );
    }
});

export default Header;
