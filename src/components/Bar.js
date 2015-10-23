import React from 'react';
import {Link} from 'react-router';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

const Bar = React.createClass({
    signOut: function(e){
        Parse.User.logOut();
        history.pushState(null, '/');
    },
    render: function () {
        return (
            <div className="bar">
                <Link to="/" className="logo"><h2>Charactr</h2></Link>
                <button onClick={this.signOut}>Sign out</button>
                <p>{Parse.User.current().get('username')}</p>
            </div>
        );
    }
});

export default Bar;
