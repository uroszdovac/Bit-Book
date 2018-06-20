import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handler = this.handler.bind(this);

    }

    handler(event) {
        console.log(event.target.name)

        this.props.collectValues(event.target.value, event.target.name)
    }

    render() {
        return (
            <div>
                <input className='col-12' type="text" id="registerName" name="registerName" placeholder=" Full Name" onChange={this.handler} />

                <input className='col-12' type="email" id="registerEmail" name="registerEmail" placeholder="Email Address" onChange={this.handler} />

                <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder="Username" onChange={this.handler} />

                <input className='col-12' type="password" id="registerPass" name="registerPass" placeholder="Password" onChange={this.handler} />
                {this.props.passwordError ? <p className='error'>Minimum 6 characters!</p> : ''}
                <input className='col-12 registerButton' type="button" value="Register" onClick={this.props.registerNewUser} />

                {this.props.userExist ? <p className='error'>This user already exist!</p> : ''}

            </div >
        )
    }
}
export default Register;