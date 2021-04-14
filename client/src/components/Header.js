  
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() {
        const {context} = this.props;
        const authUser = context.authenticatedUser;
        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo">
                        <Link to='/'>Courses</Link>
                    </h1>
                    <nav>
                        {
                            authUser ?
                                <React.Fragment>
                                    <ul className="header--signedin">
                                        <li>Welcome, {authUser.firstName} {authUser.lastName}!</li>
                                        <li><Link to='/signout'>Sign Out</Link></li>
                                    </ul>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <ul className="header--signedout">
                                        <li><Link to='/signup'>Sign Up</Link></li>
                                        <li><Link to='/signin'>Sign In</Link></li>
                                    </ul>
                                </React.Fragment>
                        }
                    </nav>
                </div>
            </header>
        );
    }
}