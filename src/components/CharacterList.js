import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import api from '../api';
import {Link} from 'react-router';

const CharacterList = React.createClass({
    mixins: [ParseReact.Mixin],

    observe: function(){
        return {
            characters: new Parse.Query('Character')
        }
    },
    componentDidMount: function(){
        return {
            characters: new Parse.Query('Character')
        }
    },
    handleClick: function(name, concept){
        /*ParseReact.Mutation.Create('Character', {
            name: name,
            concept: concept
        }).dispatch();*/
        alert("YOY");
        console.log(this.data);
    },
    render: function(){
        return(
            <ul className="characterList">
                {this.data.characters.map((character, i) =>
                    <li key={i}><Link to={`/character/${character.objectId}`}>
                        <p>{character.name}</p>
                        <p>{character.concept}</p>
                    </Link></li>
                )}
                <li>
                    <button onClick={this.handleClick}>Lisää loso</button>
                </li>
            </ul>
        )
    }
});

export default CharacterList;
