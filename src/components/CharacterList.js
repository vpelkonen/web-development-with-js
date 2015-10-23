import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import {Link} from 'react-router';
import {VelocityTransitionGroup} from 'velocity-react';

const CharacterList = React.createClass({
    mixins: [ParseReact.Mixin],

    observe: function(){
        const user = Parse.User.current();

        return {
            characters: new Parse.Query('Character').equalTo('user',user).ascending('createdAt')
        }
    },
    render: function(){
        const { characters } = this.data;
        const emptyListMessage = characters.length < 1 ? <li className="emptyListMessage">Looks like you haven't created a character yet.</li> : null;

        return(
            <ul className="characterList">
                {this.data.characters.map(character =>
                    <VelocityTransitionGroup key={character.objectId} enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                        <li className="card"><Link to={`/character/${character.objectId}`}>
                            <h3>{character.name}</h3>
                            <p>{character.concept}</p>
                        </Link></li>
                    </VelocityTransitionGroup>
                )}
                {emptyListMessage}
            </ul>
        )
    }
});

export default CharacterList;
