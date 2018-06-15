import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const usernameHandler = (event) => {
        props.getUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        props.getPassword(event.target.value)
    }

    return (
        <div>
            <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder="Your username" onChange={usernameHandler} />

            <input className='col-12' type="password" id="loginPass" name="loginPass" placeholder="Your password" onChange={passwordHandler} />

            {(props.status) ? <Redirect to='/feed' /> : <input className='col-12 loginButton' type="button" value="Log In" onClick={props.userLogin} />}
        </div>
    )
}

export default Login;