import React from 'react';
import Counterizer from './Counterizer';
import MegaCounterizer from './MegaCounterizer';

const Content = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            show: false
        }
    },
    toggleMegaCounterizer: function() {
        this.setState({
          show: !this.state.show
        });
    },
    incrementCounter: function(){
        this.setState({
            count: this.state.count +1
        });
    },
    render: function () {
        return (
            <div className="content">
                <h2>Sisäotsikkohommat</h2>
                <Counterizer count={this.state.count} onIncrementCounter={ this.incrementCounter }/>
                <button onClick={ this.toggleMegaCounterizer }>Toggle MEGACOUNTERIZER visibility</button>
                <MegaCounterizer count={this.state.count} show={this.state.show} />
            </div>
        );

    }
});

export default Content;
