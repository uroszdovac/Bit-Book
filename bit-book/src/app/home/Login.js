import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Login = (props) => {

    const handler = (event) => {
        props.getInput(event)
    }

    return (
        <div>
            <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder="Your username" />

            <input className='col-12' type="password" id="loginPass" name="loginPass" placeholder="Your password" />

            <input className='col-12 loginButton' type="button" value="Log In" />
        </div>
    )
}

export default Login;