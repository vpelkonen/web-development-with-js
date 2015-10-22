import React from 'react';

const EditButton = React.createClass({
    handleClick: function(e){
        alert("Create (home), Edit (char), Save (char-edit).");
    },
    render: function () {
        return (
            <button onClick={ this.handleClick } className="actionButton">
                <p>E</p>
            </button>
        );
    }
});

export default EditButton;
