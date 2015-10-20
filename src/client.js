import './client.css';
import '../node_modules/normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { VelocityTransitionGroup } from 'velocity-react';

function getTussit(){
    return axios.get('/api/tussi').then((response) =>{
        return response.data;
    });
}

const tussit = getTussit();
tussit.then((data) => console.log(data));


// TEXT
const HelloText = React.createClass({
    render: function () {
        return (
            <p>{this.props.name}</p>
        );
    }
});

// TITLE
const HelloTitle = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

// BUTTON
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

// MEGA-COUNTERIZER
const MegaCounterizer = React.createClass({
    render: function () {
        return (
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                {this.props.show ? <div className="megaCounterizer">
                    {this.props.count}
                </div> : undefined }
            </VelocityTransitionGroup>
        );
    }
});
// COUNTER
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

// MENU / SIDEBAR WRAPPER
const Menu = React.createClass({
    render: function () {
        return (
            <div className="menu">
                <img src="" alt="Logo stuff thing"/>
                <ul>
                    <li>Losso A</li>
                    <li>Losso B</li>
                    <li>Losso C</li>
                    <li>Losso D</li>
                </ul>
                <ActionButton/>
            </div>
        );
    }
});

// CONTENT WRAPPER
export const Content = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            show: false,
            names: []
        }
    },
    componentDidMount: function(){
        getTussit().then((data) => {
            this.setState({
                names:data
            });
        });
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
        const names = this.state.names;
        return (
            <div className="content">
                <HelloTitle name={this.props.title} />

                {this.state.names.map((name, i) =>
                    <HelloText key={i} name={name} />
                )}
                <Counterizer count={this.state.count} onIncrementCounter={ this.incrementCounter }/>
                <button onClick={ this.toggleMegaCounterizer }>Toggle MEGACOUNTERIZER visibility</button>
                <MegaCounterizer count={this.state.count} show={this.state.show} />
            </div>
        );
    }
});

// MASTER WRAPPER
const MasterApp = React.createClass({
    render: function(){
        return (
            <div className="master">
                <Menu/>
                <Content title="Otsikkohommat" />
            </div>
        );
    }
});


ReactDOM.render(
    <MasterApp/>,
    document.getElementById('app')
);
