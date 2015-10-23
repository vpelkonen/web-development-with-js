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
    login: function(e){
        e.preventDefault();
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
        let user = new Parse.User();
        const history = this.props.history;
        user.set({
            'username':this.state.username,
            'password':this.state.password
        });
        const nameState = this.state.username;
        const pwdState = this.state.password;
        user.signUp(null,{
            success: function(user){
                // IDENTICAL TO SIGN IN - clashes with form submit prevention; hacks on hacks
                Parse.User.logIn(nameState, pwdState,{
                success: function(user){
                    history.pushState(null, '/home');
                },
                error: function(user, error){
                    alert(error.message);
                }
            });
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
                <h1>Charactr</h1>
                <h3>Your other life awaits.</h3>
                <form onSubmit={this.login}>
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
