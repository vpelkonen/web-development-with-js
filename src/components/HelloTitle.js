import React from 'react';

const HelloTitle = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

export default HelloTitle;
