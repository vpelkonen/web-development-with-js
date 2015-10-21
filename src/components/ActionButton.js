import React from 'react';

const ActionButton = React.createClass({
    handleClick: function(e){
        alert("Mighty manatee");
    },
    render: function () {
        return (
            <button onClick={ this.handleClick } className="actionButton">
                <p>+</p>
            </button>
        );
    }
});

export default ActionButton;
