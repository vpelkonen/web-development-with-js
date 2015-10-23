import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

import Bar from './Bar.js';
import Header from './Header.js';
import CharacterList from './CharacterList';
import AddButton from './AddButton';

const Home = React.createClass({
    componentDidMount: function(){
        // If no user, kick out to login
        if(!Parse.User.current()){
            history.pushState(null, '/');
        }
    },
    render: function () {
        return (
            <div>
                <Bar/>
                <Header title="Characters"/>
                <main className="home">
                    <CharacterList/>
                </main>
                <AddButton/>
            </div>
        );

    }
});

export default Home;
