import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

const FourOhFour = React.createClass({
    componentDidMount: function(){
        // If user, reroute to login; else go home
        //this.props.history
        if(Parse.User.current()){
            history.pushState(null, '/');
        } else{
            history.pushState(null, '/home');
        }
    },
    render: function(){
        return(
            <h1>404 - Losso luck</h1>
        );
    }
});

export default FourOhFour;
