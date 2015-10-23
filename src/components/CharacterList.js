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
            characters: new Parse.Query('Character')
        }
    },
    render: function(){
        return(
            <ul className="characterList">
                {this.data.characters.map((character, i) =>
                    <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                        <li key={i}><Link to={`/character/${character.objectId}`}>
                            <h3>{character.name}</h3>
                            <p>{character.concept}</p>
                        </Link></li>
                    </VelocityTransitionGroup>
                )}
                <li><Link to="/">Create new...</Link></li>
            </ul>
        )
    }
});

export default CharacterList;
