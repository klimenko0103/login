import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Login from './log-in';
import SignUp from './sign-up';
import Edit from './profile';


export default class Main extends Component
{
    constructor() {
        super();
        this.state = {
            extraClass1: '',
            extraClass2: 'active',
        }
    }

    ActiveForm(str){
        str === 'sign' ? this.setState({extraClass1: 'active', extraClass2: ''}) : this.setState({extraClass1: '', extraClass2: 'active'});
    }

    changeUser(user) {
       this.setState({user: user})
    }


    render()
    {
        var extraClass1 = this.state.extraClass1;
        var extraClass2 = this.state.extraClass2;

        var user = this.state.user || false;
        console.log(user);

        return (
            <div className="f">
                     <Router>
                <div >
                    <div className="forms1">
                        <div >
                            <ul className="nav nav-tabs nav-justified">
                                {!user &&<li className={"tab " + extraClass1} onClick={this.ActiveForm.bind(this, 'sign')}><Link to={'/sign-up'}>Sign Up</Link></li>}
                                {!user && <li className={"tab " + extraClass2} onClick={this.ActiveForm.bind(this, 'log')}><Link to={'/log-in'}>Log In</Link></li>}
                                {user && <li className={"user "} > <Link to={'/profile'}><img src={require('./2.png')} alt="profiles" height="36"/></Link></li>}
                            </ul>
                        </div>
                    </div>

                    <Switch>}
                        <Route exact path='/sign-up' component={SignUp} />
                        <Route exact path='/profile' component={Edit} />
                        <Route exact path="/log-in" render={() => (
                            (user) ? (
                                <Redirect to="/profile"/>
                            ) : (
                                <Login onChange={this.changeUser.bind(this)}/>
                            )
                        )}/>
                    </Switch>

                </div>
            </Router>
            </div>
        )
    }
}
