import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

const AddButton = React.createClass({
    handleClick: function(e){
        ParseReact.Mutation.Create('Character', {
            user: Parse.User.current(),
            name: 'New entry',
            concept: null,
            description: null,
            aspects: {
                ambition: null,
                conflict: null,
                ethic: null
            }
        }).dispatch().then(char => {
            history.pushState(null,'/character/'+char.objectId);
        });
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
