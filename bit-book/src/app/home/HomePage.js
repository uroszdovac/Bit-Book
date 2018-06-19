import React from 'react';
import Login from './Login';
import Register from './Register';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import authenticationService from '../../services/authenticationService'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            status: false,
            regName: '',
            regEmail: '',
            regUsername: '',
            regPassword: '',
            passwordError: false,
            userExist: false,
            loginError: false
        }
        this.getPassword = this.getPassword.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.registerName = this.registerName.bind(this);
        this.registerEmail = this.registerEmail.bind(this);
        this.registerUsername = this.registerUsername.bind(this);
        this.registerPassword = this.registerPassword.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
    }

    getUsername(username) {
        this.setState({
            username,
            loginError: false
        })
    }
    getPassword(password) {
        this.setState({
            password,
            loginError: false
        })
    }
    userLogin() {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        authenticationService.loggingIn(user)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.setState({
                        status: true
                    })
                }
            }).catch(() => {
                this.setState({
                    loginError: true
                })
            })
    }

    registerName(name) {
        this.setState({
            regName: name
        })
    }
    registerEmail(email) {
        this.setState({
            regEmail: email
        })
    }
    registerUsername(username) {
        this.setState({
            regUsername: username,
            userExist: false
        })
    }
    registerPassword(password) {
        this.setState({
            regPassword: password,
            passwordError: false
        })
    }
    registerNewUser() {
        if (this.state.regPassword.length < 6) {
            this.setState({
                passwordError: true
            })
        } else {
            let user = {
                name: this.state.regName,
                email: this.state.regEmail,
                username: this.state.regUsername,
                password: this.state.regPassword
            }
            authenticationService.register(user).then(response => {
                console.log(response.status)
                if (response.status >= 200 && response.status < 300) {
                    this.setState({
                        userExist: false
                    })
                }
            }).catch(() => {
                this.setState({
                    userExist: true
                })
            })
        }
    }


    render() {
        return (
            <div className='home'>
                <div className='row welcome'>
                    <div className='offset-2 col-4'>
                        <h1>WELCOME</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu elit ipsum. Pellentesque elit erat, hendrerit faucibus ligula eu, pretium mattis diam. Vivamus semper leo sed consectetur dictum. Suspendisse magna tortor, pellentesque in feugiat in, porta eu tortor. Etiam imperdiet tempor est at placerat. Nam ut mi et sapien vehicula imperdiet.</p>
                    </div>
                    <div className='offset-1 col-3'>
                        <Tabs className='form animated bounceInLeft' defaultIndex={this.props.match.params.mode === "register" ? 1 : 0} defaultFocus={true}>

                            <TabList className='loginRegister row'>
                                <Tab className='col-6'>Log In</Tab>
                                <Tab className='col-6'>Register</Tab>
                            </TabList>

                            <TabPanel className='loginRegisterInputs'>
                                <Login loginError={this.state.loginError} getUsername={this.getUsername} getPassword={this.getPassword} userLogin={this.userLogin} status={this.state.status} />
                            </TabPanel>
                            <TabPanel className='loginRegisterInputs'>
                                <Register registerName={this.registerName} registerEmail={this.registerEmail} registerUsername={this.registerUsername} registerPassword={this.registerPassword} registerNewUser={this.registerNewUser} passwordError={this.state.passwordError} userExist={this.state.userExist} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;