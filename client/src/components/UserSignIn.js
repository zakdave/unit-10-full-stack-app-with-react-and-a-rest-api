import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {

    state = {
        emailAddress: '',
        password: '',
        errors: [],
    }

    render() {

        const {
            emailAddress,
            password,
            errors,
        } = this.state;


        return (
            <main>
                <div className="form--centered">
                    <h2>Sign In</h2>
                    <Form
                        cancel={this.cancel}
                        submit={this.submit}
                        errors={errors}
                        submitButtonText="Sign In"
                        elements={() => (
                            <React.Fragment>
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
                            </React.Fragment>
                        )}
                    />
                    <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
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
        const {context} = this.props;
        const {from} = this.props.location.state || { from: { pathname: '/' } };
        const {emailAddress, password} = this.state;

        context.actions.signIn(emailAddress, password)
            .then(user => {
                if (user === null) {
                    this.setState(() => {
                        return { errors: ['Log in unsuccesful'] };
                    });
                } else {
                    this.props.history.push(from);
                    console.log(`${emailAddress} is now logged in. Credentials saved for 24 hours`);
                }
            })
            .catch(err => {
                console.log('Error: ', err);
                this.props.history.push('/error');
            })
    }

    //Sends user back to index '/' 
    cancel = () => {
        this.props.history.push('/');
    }
}