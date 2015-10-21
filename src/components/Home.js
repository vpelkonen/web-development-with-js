import React from 'react';
import Header from './Header.js';
import CharacterList from './CharacterList';
import ActionButton from './ActionButton';

const Home = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            show: false
        }
    },
    toggleMegaCounterizer: function() {
        this.setState({
          show: !this.state.show
        });
    },
    incrementCounter: function(){
        this.setState({
            count: this.state.count +1
        });
    },
    render: function () {
        return (
            <div className="home">
                <Header title="Characters"/>
                <main>
                    <CharacterList/>
                </main>
                <ActionButton/>
            </div>
        );

    }
});

export default Home;
