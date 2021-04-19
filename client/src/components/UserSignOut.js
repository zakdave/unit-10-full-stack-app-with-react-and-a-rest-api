  
import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const SignOut = ({ context }) => {

    //Pull signOut from actions and then redirects to index '/'
    useEffect(() => context.actions.signOut());
    return (
        <Redirect to='/' />
    );
}

export default SignOut;