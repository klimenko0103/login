import React, {Component} from 'react';
// import * as md5 from "js-md5";
import fetch from "node-fetch";

export default class Login extends Component {

    constructor(props) {
        super(props);
        var login = props.login || '';
        var LoginIsValid = this.validateLogin(login);
        var password = props.password ||'';
        var PasswordIsValid = this.validatePassword(password);
        this.state = {
            login: login,
            loginValid: LoginIsValid,
            password: password,
            passwordValid: PasswordIsValid,
        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    tokenUser(user) {
        console.log("lalala")
        fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify({
                login : this.state.login,
                password:this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors',
        })

            .then(response => {
                if (response.status !== 200) {
                    console.log('likeeeeeee ', response);
                }else{
                    return response.text()
                }
            })

            .then(responseText => {

if(!responseText) return;
                console.log(responseText)
                localStorage.setItem('token',responseText);

                user = localStorage.getItem('token')
                // console.log(user);
                if (!!user) {
                    this.props && this.props.onChange(user)
                    localStorage.setItem('token', user || '');
                    console.log('user', user);
                }
            })
            .catch(err => console.error(err))



    }

        // .then((res) => {
        //     return localStorage.setItem('token',JSON.stringify(res));
        // // })
        //     .then(
        //         function(response) {
        //             if (response.status !== 200) {
        //                 console.log('Looks likeeeeeee there was a problem',
        //                     JSON.stringify(response));
        //                 return;
        //             }
        //
        //             // Examine the text in the response
        //             response.json().then(function(data) {
        //                 console.log(data);
        //             });
        //         }
        //     )
        // // .then(res => console.log(res))
        //
        // .then(function (data) {
        //     console.log('Request succeeded', data);
        // })







    validateLogin(login) {
        // console.log(!login)
        if (login.trim().length > 0) {
            return true;
        }
        // console.log(login.trim().length)
        // console.log(!login)
        return false;
    }

    validatePassword(password) {
        if (password.trim().length > 0) {
            return true;
        }
        return false;
    }

    handleLoginChange(e) {
        var val = e.target.value;
        var valid = this.validateLogin(val);
        this.setState({login: val, loginValid: valid});
    }

    handlePasswordChange(e) {
        var val = e.target.value;
        var valid = this.validatePassword(val);
        this.setState({password: val, passwordValid: valid});
    }

    login(user) {
        // user = this.state.login === localStorage.getItem('loclogin') && md5(this.state.password) === localStorage.getItem('locpassword');
        user = localStorage.getItem('token')
        console.log(user);
        if (!!user) {
            this.props && this.props.onChange(user)
            localStorage.setItem('online', JSON.stringify(user) || '');
        }
    }

    render() {
        var loginColor = (this.state.loginValid === true) ? "green" : "red";
        var passwordColor = (this.state.passwordValid === true) ? "green" : "red";

        // console.log(this.state.login.replace(/\s+/g, '').length)


        return (
            <div className="forms">
                <div>
                    <form action="#" id="login">

                        <div className="form-group">
                            <label htmlFor="inputLogin">Login</label>
                            <input type="login" onChange={this.handleLoginChange} id="inputLogin"
                                   className="form-control " placeholder="Login" required
                                   style={{borderColor: loginColor}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword"> Password</label>
                            <input type="password" onChange={this.handlePasswordChange} id="inputPassword"
                                   className="form-control " placeholder="Password" required
                                   style={{borderColor: passwordColor}}/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.tokenUser.bind(this)}
                                type="button" disabled={!this.state.login | !this.state.password}> Log In
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}



