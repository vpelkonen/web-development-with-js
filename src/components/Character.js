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
            characters: new Parse.Query('Character')
        }
    },
    componentDidMount: function(){
        console.log(this.props.params);
        return {
            characters: new Parse.Query('Character')
        }
    },
    render: function(){
        return(
            <div className="character">
                <Bar/>
                <Header title={this.props.params.name}/>
                <main>
                    <h3>Concept: </h3>
                    <h4>Description: </h4>
                    <EditButton/>
                </main>
            </div>
        );
    }
});

export default Character;
