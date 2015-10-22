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
    addStuff: function(){
        ParseReact.Mutation.Create('Character', {
            name: 'Kolopää Kalle'
        }).dispatch();
        console.log(this.data);
    },
    render: function(){
        const TestObject = Parse.Object.extend("TestObject");
        const testObject = new TestObject();
        testObject.save({foo:'bar'}).then(function(object){
            console.log("Parse key authorized!")
        });
        return(
            <ul className="characterList">
            {console.log(this.data)}
                {this.data.characters.map((character, i) =>
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
