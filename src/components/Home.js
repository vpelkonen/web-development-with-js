import React from 'react';
import Header from './Header.js';
import CharacterList from './CharacterList';
import AddButton from './AddButton';

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
                <AddButton/>
            </div>
        );

    }
});

export default Home;
