import React from 'react';
import {Link} from 'react-router';
import Parse from 'parse';
import ParseReact from 'parse-react';
import history from '../history';

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
            history.replaceState(null, '/home');
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
        Parse.User.logIn(this.state.username, this.state.password,{
            success: function(user){
                history.replaceState(null, '/home');
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
    render: function(){
        return(
            <main className="login">
                <h1>App title</h1>
                <form>
                    <input type="text" name="username" defaultValue="Username" onChange={this.userInput}/>
                    <input type="text" name="password" defaultValue="Password" onChange={this.passInput}/>
                </form>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>
            </main>
        )
    }
});

export default Login;
