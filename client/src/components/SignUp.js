import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';

export default class SignUp extends Component {

    //Establish state for user information
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: []
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
            errors,
        } = this.state;

        return (
            <main>
                <div className="form--centered">
                    <h2>Sign Up</h2>
                    <Form
                        cancel={this.cancel}
                        submit={this.submit}
                        errors={errors}
                        submitButtonText="Sign Up"
                        elements={() => (
                            <React.Fragment>
                                <label htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={this.change}
                                />
                                <label htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={this.change}
                                />
                                <label htmlFor="emailAddress">
                                    Email Address
                                    </label>
                                <input
                                    id="emailAddress"
                                    name="emailAddress"
                                    type="email"
                                    value={emailAddress}
                                    onChange={this.change}
                                />
                                <label htmlFor="password">
                                    Password
                                    </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.change}
                                />
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={this.change}
                                />
                            </React.Fragment>
                        )}
                    />
                    <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
                </div>
            </main>
        );
    }

    //Change state when input value changes 
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    //Change state when form is filled out and submitted
    //Validates password and signs user in 
    submit = () => {
        const { context } = this.props;

        const {
            firstName,
            lastName,
            emailAddress,
            confirmPassword,
            password,
            errors
        } = this.state;

        let passwordMatchError = "Passwords don't match";

        const user = {
            firstName,
            lastName,
            emailAddress,
            password
        };

        if (password === confirmPassword) {

            context.data.createUser(user)
                .then(errors => {
                    if (errors.length) {
                        this.setState({ errors: [...errors] });
                    } else {
                        context.actions.signIn(emailAddress, password)
                            .then(() => {
                                this.props.history.push('/');
                            });
                        console.log(`${firstName} ${lastName} has been created as a user. `);
                    }
                })
                .catch(err => {
                    console.log('Error: ', err);
                    this.props.history.push('/error');
                });
        } else if (password !== confirmPassword) {
            if (!this.state.errors.includes(passwordMatchError)) {
                this.setState({ errors: [...errors, passwordMatchError] });
            }
        }
    }

    //Return to index '/'
    cancel = () => {
        this.props.history.push('/');
    }
}