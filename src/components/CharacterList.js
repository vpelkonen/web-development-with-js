import React from 'react';
import api from '../api';
import {Link} from 'react-router';

const CharacterList = React.createClass({
    getInitialState: function(){
        return {
            characters: []
        }
    },
    componentDidMount: function(){
        api.getCharacters().then((data) => {
            this.setState({
                characters:data
            });
        });
    },
    render: function(){
        const characters = this.state.characters;
        return(
            <ul className="characterList">
                {this.state.characters.map((character, i) =>
                    <li><Link to={`/character/${character.name}`} key={i}>
                        <h2>{character.name}</h2>
                        <p>{character.concept}</p>
                    </Link></li>
                )}
            </ul>
        )
    }
});

export default CharacterList;
