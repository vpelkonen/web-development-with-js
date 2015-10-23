import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

import Bar from './Bar.js';
import Header from './Header';
import EditButton from './EditButton';

const Character = React.createClass({
    mixins: [ParseReact.Mixin],

    observe: function(){
        return {
            user: ParseReact.currentUser
        }
    },
    deleteCharacter: function(){
        alert('Are you sure? This caharacter wll be deleted FOREVER.');
    },
    render: function(){
        return(
            <div>
                <Bar/>
                <Header title={this.props.params.name}/>
                <main className="character">
                    <h3>Concept: </h3>
                    <h4>Description: </h4>
                    <button className="deleteButton" onClick={this.deleteCharacter}>DELETE</button>
                </main>
                <EditButton/>
            </div>
        );
    }
});

export default Character;
