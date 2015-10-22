import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

const FourOhFour = React.createClass({
    componentDidMount: function(){
        // If user, reroute to login; else go home
        if(Parse.User.current()){
            history.replaceState(null, '/');
        } else{
            history.replaceState(null, '/home');
        }
    },
    render: function(){
        return(
            <h1>404 - Losso luck</h1>
        );
    }
});

export default FourOhFour;
