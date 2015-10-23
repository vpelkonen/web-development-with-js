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
            character: new Parse.Query('Character').equalTo('objectId',this.props.params.id)
        }
    },
    deleteCharacter: function(){

    },
    saveCharacter:function(){

    },
    render: function(){
        const c = this.data.character[0];
        return(
            <div>
                <Bar/>
                <Header title={c.name}/>
                <main className="character">
                    <form onSubmit='return false;'>
                        <h2>Concept:</h2>
                        <input name="concept" type="text"/>
                        <h2>Description:</h2>
                        <input name="description" type="textarea"/>
                        <h2>Aspects:</h2>
                        <h3>Ambition:</h3>
                        <input name="ambition" type="text"/>
                        <h3>Conflict:</h3>
                        <input name="conflict" type="text"/>
                        <h3>Ethic:</h3>
                        <input name="ethic" type="text"/>
                    </form>
                    <button className="saveButton" onClick={this.saveCharacter}>Save</button>
                    <button className="deleteButton" onClick={this.deleteCharacter}>Delete</button>
                </main>
                <EditButton/>
            </div>
        );
    }
});

export default Character;

/*
                    <h2>Concept: {c.concept}</h2>
                    <h2>Description: {c.description}</h2>
                    <h2>Aspects:</h2>
                    <h3>Ambition: {c.ambition}</h3>
                    <h3>Conflict: {c.conflict}</h3>
                    <h3>Ethic: {c.ethic}</h3>
                    <h2>Skill set:</h2>
                    <h2>Perks:</h2>
                    <h2>Consequences:</h2>
                    */
