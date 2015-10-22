import React from 'react';

const AddButton = React.createClass({
    handleClick: function(e){
        alert("Create (home), Edit (char), Save (char-edit).");
    },
    render: function () {
        return (
            <button onClick={ this.handleClick } className="actionButton">
                <p>+</p>
            </button>
        );
    }
});

export default AddButton;
