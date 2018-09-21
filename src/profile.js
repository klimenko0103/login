import React, { Component } from 'react';
import * as md5 from "js-md5";

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // var gender = props.gender;
        // var genderIsValid = this.validateGender(gender);
        var password = props.password;
        var PasswordIsValid = this.validatePassword(password);
        var name = props.name;
        var NameIsValid = this.validateName(name);
        var age = props.age;
        var AgeIsValid = this.validateAge(age);

        this.state = {
            name:name,
            nameValid:NameIsValid,
            age:age,
            ageValid: AgeIsValid,
            // gender: gender,
            // genderValid: genderIsValid,
            password: password,
            passwordValid: PasswordIsValid

        };
    }

    // validateGender(gender){
    //     return (!gender);
    // }
    validatePassword(password){
        return (!password);
    }
    validateAge(age){
        return (!age);
    }
    validateName(name){
        return (!name);
    }



    handleGenderChange(e) {
        var val = e.target.value;
        this.setState({gender: val});
    }
    handlePasswordChange(e) {
        var val = e.target.value;
        var valid = this.validatePassword(val);
        this.setState({password: val, passwordValid: valid});
    }
    handleNameChange(e){
        var val = e.target.value;
        var valid = this.validateName(val);

        this.setState({name: val, nameValid: valid})
    }
    handleAgeChange(e){
        var val = e.target.value;
        var valid = this.validateAge(val);
        this.setState({age: val, ageValid: valid});

    }



    edit(){
        localStorage.setItem('locpassword',md5(this.state.password || ''));
        localStorage.setItem('locname',this.state.name || '');
        localStorage.setItem('locage',this.state.age || '');
        localStorage.setItem('locgender',this.state.gender || '');

        var  localValue = localStorage.getItem('locpassword');
        console.log(localValue);
        // console.log(this.state.gender);
    }



    render() {

        var passwordColor = (this.state.passwordValid===true)?"red":"green" ;
        var nameColor = (this.state.nameValid===true)?"red":"green" ;
        var ageColor = (this.state.ageValid===true)?"red":"green" ;


        return (
            <div className="forms">
                <div >

                    <form action="#" id="edit">
                        <h1>Profile setup</h1>

                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="name"  onChange={this.handleNameChange} placeholder={localStorage.getItem('locname')} id="inputName" className="form-control"  autoFocus style={{borderColor:nameColor}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAge">Age</label>
                            <input type="age" onChange={this.handleAgeChange}  id="inputAge" className="form-control" placeholder={localStorage.getItem('locage')} style={{borderColor:ageColor}} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="input">Gender</label>
                            <div className="form-check form-check-inline">
                                <input onChange={this.handleGenderChange} className="form-check-input" name="inlineRadioOptions" type="radio"  id="Radios1" value="m"  />
                                <label className="form-check-label" htmlFor="Radios1">Man</label>
                                <input onChange={this.handleGenderChange} className="form-check-input" name="inlineRadioOptions" type="radio"  id="Radios2" value="w"/>
                                <label className="form-check-label" htmlFor="Radios2">Women</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPassword"> Change password</label>
                            <input type="password" onChange={this.handlePasswordChange}  id="inputPassword" className="form-control" placeholder="Password" required style={{borderColor:passwordColor}}/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.edit.bind(this)} type="button" disabled={!this.state.age && !this.state.gender && !this.state.name && !this.state.password}> Save </button>

                    </form>
            </div>
            </div>

        )
    }
}