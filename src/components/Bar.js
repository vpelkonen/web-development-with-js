import React from 'react';
import {Link} from 'react-router';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

const Bar = React.createClass({
    signOut: function(e){
        Parse.User.logOut();
        history.replaceState(null, '/');
        console.log(Parse.User.current());
    },
    render: function () {
        return (
            <div className="bar">
                <Link to="/" className="logo">Home</Link>
                <p>{Parse.User.current().get('username')}</p>
                <button onClick={this.signOut}>Sign out</button>
            </div>
        );
    }
});

export default Bar;
