import React from 'react';
import Navbar from "./Navbar";

class DemoForm extends React.Component {
constructor() {
super();
this.state = {
input: {},
errors: {}
};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
let input = this.state.input;
input[event.target.name] = event.target.value;
this.setState({ input}); }handleSubmit(event) {event.preventDefault();
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["username"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
        alert('You are signed in');
    }
    }
    validate(){
let input = this.state.input;
let errors = {};
let isValid = true;
// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters
    if (!input["username"]) {
    isValid = false;
    errors["username"] = "Please enter a username.";
    }
    if (typeof input["username"] !== "undefined") {
    const re = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    // Regex rule for Instagram usernames. Usernames can contain characters a-z, 0-9, underscores and periods. The username cannot start with a period nor end with a period. It must also not have more than one period sequentially. Max length is 30 chars.
    if(input["username"].length < 6 || !re.test(input["username"])){
    isValid = false;
    errors["username"] = "Please enter valid username with min 6 values..";
    }}
    if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
    }
    if (typeof input["email"] !== "undefined") 
    {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
        }
    }
    if (!input["password"]) {
    isValid = false;
    errors["password"] = "Please enter your password.";
    }
    if (!input["confirm_password"]) {
    isValid = false;
    errors["confirm_password"] = "Please enter your confirm password.";
    }
    if (typeof input["password"] !== "undefined") {
    var passValid = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm); 

    if (!passValid.test(input["password"])){
    isValid = false;
    errors["password"] = "Please add a valid password (Example: Testing193!).";
    }
    }
    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
    if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
        }
    if (input["password"] != input["confirm_password"]) {
    isValid = false;
    errors["password"] = "Passwords don't match.";}}
    this.setState({errors: errors});
    return isValid;
    }

render() {

    return (

    <div className="Register ">
        <Navbar active='Register' />    
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label for="username">Username:</label>
            <input 
            type="text" 
            name="username" 
            value={this.state.input.username}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter username" 
            id="username" />
            <div className="text-danger">{this.state.errors.username}</div>
        </div>
        <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
                type="text" 
                name="email" 
                value={this.state.input.email}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter email" 
                id="email" />
                <div className="text-danger">{this.state.errors.email}</div>
        </div>
                <div class="form-group">
                <label for="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    class="form-control" 
                    placeholder="Enter password" 
                    id="password" />
                <div className="text-danger">{this.state.errors.password}</div>
        </div>
        <div class="form-group">
                <label for="password">Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirm_password" 
                    value={this.state.input.confirm_password}
                    onChange={this.handleChange}
                    class="form-control" 
                    placeholder="Enter confirm password" 
                    id="confirm_password" />
                <div className="text-danger">
                    {this.state.errors.confirm_password}
                </div>
        </div>
        <input type="submit" value="Submit" class="btn btn-success" />
        </form>
    </div>
    );
    }
}


export default DemoForm;