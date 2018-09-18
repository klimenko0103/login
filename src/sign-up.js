import React, { Component } from 'react';
import * as md5 from 'js-md5';


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        var email = props.email;
        var EmailIsValid = this.validateEmail(email);
        var login = props.login;
        var LoginIsValid = this.validateLogin(login);
        var password = props.password;
        var PasswordIsValid = this.validatePassword(password);

        this.state = {
           // email:'',
            //password:'',
            name:'',
            age:'',
            //login:'',
            emailValid: EmailIsValid,
            email: email,
            login: login,
            loginValid: LoginIsValid,
            password: password,
            passwordValid: PasswordIsValid

        };


    }
    validateEmail(email){
        return (!email);
    }
    validateLogin(login){
        return (!login);
    }
    validatePassword(password){
        return (!password);
    }




    handleEmailChange(e) {
        var val = e.target.value;
        var valid = this.validateEmail(val);
        this.setState({email: val, emailValid: valid});
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




    signup(){
        //alert(' Password is ' + this.state.password);
        localStorage.setItem('locpass',md5(this.state.password || ''));
        var  localValue = localStorage.getItem('locpass');
        console.log(localValue);


    }


    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleAgeChange(e){
        this.setState({age:e.target.value})
    }
    // handleEmailChange(e){
    //     this.setState({email:e.target.value})
    // }
    // handleLoginChange(e){
    //     this.setState({login:e.target.value})
    // }
    // handlePasswordChange(e){
    //     this.setState({password:e.target.value})
    // }






    render() {
        var emailColor = (this.state.emailValid===true)?"red":"green" ;
        var loginColor = (this.state.loginValid===true)?"red":"green" ;
        var passwordColor = (this.state.passwordValid===true)?"red":"green" ;

        //var p = md5(this.state.password || '');
         //console.log(this.state.password, typeof this.state.password);
        //  var l = md5("p");
        // console.log(l);
        //var md5pass = md5(this.state.password);
        //console.log(md5('aaaa'));


                return (
                    <div className="forms">
                        <div >

                            <form action="#" id="signup">

                                <h1> Sign Up </h1>
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="name"  onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" autoFocus />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAge">Age</label>
                                    <input type="age" onChange={this.handleAgeChange} id="inputAge" className="form-control" placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail"> Email address</label>
                                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required style={{borderColor:emailColor}} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputLogin">Login</label>
                                    <input type="login" onChange={this.handleLoginChange} id="inputLogin" className="form-control" placeholder="Login" required style={{borderColor:loginColor}}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword"> Password</label>
                                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required style={{borderColor:passwordColor}}/>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" onClick={this.signup.bind(this)} type="button" disabled={!this.state.email| !this.state.login | !this.state.password}> Sign Up </button>

                            </form>




                        </div>
                    </div>

                )
            }
        }



