import React from 'react';
import {Link} from 'react-router';
import Parse from 'parse';
import ParseReact from 'parse-react';

const Login = React.createClass({
    getInitialState: function(){
        return {
            username:null,
            password:null
        }
    },
    componentDidMount: function(){
        // If laready logged in, reroute to home
        if(Parse.User.current()){
            this.props.history.pushState(null, '/home');
        }
    },
    userInput: function(e){
        this.setState({username: e.target.value});
    },
    passInput: function(e){
        this.setState({password: e.target.value});
    },
    login: function(){
        console.log('Attempt to login: ' + this.state.username);
        const history = this.props.history;
        Parse.User.logIn(this.state.username, this.state.password,{
            success: function(user){
                history.pushState(null, '/home');
            },
            error: function(user, error){
                alert(error.message);
            }
        });
    },
    signup: function(){
        console.log('Attempt to sign up: ' + this.state.username);
        let user = new Parse.User();
        const doAlsoLogin = this.login; // GRGLRGLLRL: set login function to a local variable to use it within Parse object
        user.set({
            'username':this.state.username,
            'password':this.state.password
        });
        user.signUp(null,{
            success: function(user){
                alert('Succesfully signed up!');
                doAlsoLogin();
            },
            error: function(user, error){
                alert(error.message);
            }
        })
    },
    getFocus: function(e){
        if(e.target.value === e.target.defaultValue){
            e.target.value = '';
        }
    },
    loseFocus: function(e){
        if (e.target.value === ''){
            e.target.value = e.target.defaultValue;
        }
    },
    render: function(){
        return(
            <main className="login">
                <h1>App title</h1>
                <h3>Mandatory descriptive subheading.</h3>
                <form onSubmit={::this.login}>
                    <input type="text" name="username" onFocus={this.getFocus} onBlur={this.loseFocus} defaultValue="Username" onChange={this.userInput}/>
                    <input type="text" name="password" onFocus={this.getFocus} onBlur={this.loseFocus} defaultValue="Password" onChange={this.passInput}/>
                    <div className="buttonGroup">
                        <button type="submit" className="signIn" onClick={this.login}>Sign in</button>
                        <button type="button" className="register" onClick={this.signup}>Register</button>
                    </div>
                </form>
                <p className="owner">by Ville Pelkonen</p>
            </main>
        )
    }
});

export default Login;
