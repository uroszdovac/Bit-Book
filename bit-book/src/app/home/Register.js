import React from 'react';

const Register = (props) => {

    const nameHandler = (event) => {
        props.registerName(event.target.value)
    }

    const emailHandler = (event) => {
        props.registerEmail(event.target.value)
    }

    const usernameHandler = (event) => {
        props.registerUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        props.registerPassword(event.target.value)
    }

    console.log(props.userExist);

    return (
        <div>
            <input className='col-12' type="text" id="registerName" name="registerName" placeholder=" Full Name" onChange={nameHandler} />

            <input className='col-12' type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" onChange={emailHandler} />

            <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder=" Username" onChange={usernameHandler} />

            <input className='col-12' type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" onChange={passwordHandler} />
            {props.passwordError ? <p class='error'>Minimum 6 characters!</p> : ''}
            <input className='col-12 registerButton' type="button" value="Register" onClick={props.registerNewUser} />

            {props.userExist ? <p class='error'>This user already exist!</p> : ''}

        </div>
    )
}

export default Register;