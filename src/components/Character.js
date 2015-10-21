import React from 'react';
import Header from './Header';
import api from '../api';

const Character = React.createClass({
    getInitialState: function(){
        return {
            character: [{
                name: this.props.params.name
            }]
        }
    },
    componentDidMount: function(){
        api.getCharacters().then( (data) => {
            const name = this.props.params.name; // from URL
            const char = data.filter(function(obj){
                return obj.name === name;
            });

            this.setState({
                character:char[0]
            });
        });
    },
    render: function(){
        return(
            <div className="character">
                <Header title={this.state.character.name}/>
                <main>
                    <h3>Concept: {this.state.character.concept}</h3>
                    <h4>Description: {this.state.character.description}</h4>
                </main>
            </div>
        );
    }
});

export default Character;
