import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Register = () => {


    return (
        <div>
            <input className='col-12' type="text" id="registerName" name="registerName" placeholder=" Full Name" />

            <input className='col-12' type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" />

            <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder=" Username" />

            <input className='col-12' type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" />

            <input className='col-12 registerButton' type="button" value="Register" />
        </div>
    )
}

export default Register;