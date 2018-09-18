import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './log-in';
import SignUp from './sign-up';


class Main extends Component
{
    constructor() {
        super();
        this.state = {
            extraClass1: 'active',
            extraClass2: ''
        }
    }



    // componentDidMount() {
    //     setTimeout(()=>{this.setState({extraClass: ''})}, 4000);
    // }

    ActiveForm(str){
        str === 'sign' ? this.setState({extraClass1: 'active', extraClass2: ''}) : this.setState({extraClass1: '', extraClass2: 'active'});
    }


    render()
    {
        var extraClass1 = this.state.extraClass1;
        var extraClass2 = this.state.extraClass2;

        return (
            <Router>
                <div>
                    <div className="forms">
                        <div >
                            <ul className="nav nav-tabs nav-justified">
                                <li className={"tab " + extraClass1} onClick={this.ActiveForm.bind(this, 'sign')}><Link to={'/sign-up'}>Sign Up</Link></li>
                                <li className={"tab " + extraClass2} onClick={this.ActiveForm.bind(this, 'log')}><Link to={'/log-in'}>Log In</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path='/log-in' component={Login} />
                        <Route exact path='/sign-up' component={SignUp} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;