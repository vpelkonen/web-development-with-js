import React from 'react';

const Counterizer = React.createClass({
    render: function () {
        return (
            <div>
                <div className="number">{this.props.count}</div>
                <button className="addButton" onClick={ this.props.onIncrementCounter }>MOAR!</button>
            </div>
        );
    }
});

export default Counterizer;
