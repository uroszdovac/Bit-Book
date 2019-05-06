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
            registerName: '',
            registerEmail: '',
            loginUsername: '',
            registerPass: '',
            passwordError: false,
            userExist: false,
            loginError: false,
            currentIndex: 0
        }

        this.getPassword = this.getPassword.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
        this.onTabSelect = this.onTabSelect.bind(this);
        this.collectValues = this.collectValues.bind(this);
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

    collectValues(value, name) {
        this.setState({
            [name]: value
        })
    }

    registerNewUser() {
        if (this.state.registerPass.length < 6) {
            this.setState({
                passwordError: true
            })
        } else {
            let user = {
                name: this.state.registerName,
                email: this.state.registerEmail,
                username: this.state.loginUsername,
                password: this.state.registerPass
            }
            authenticationService.register(user).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    this.setState({
                        userExist: false,
                        currentIndex: 0
                    })
                }
            }).catch(() => {
                this.setState({
                    userExist: true
                })
            })
        }
    }

    onTabSelect(index) {
        this.setState({
            currentIndex: index
        })
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
                        <Tabs className='form animated bounceInLeft' selectedIndex={this.state.currentIndex} onSelect={this.onTabSelect}>

                            <TabList className='loginRegister row'>
                                <Tab className='col-6'>Log In</Tab>
                                <Tab className='col-6'>Register</Tab>
                            </TabList>

                            <TabPanel className='loginRegisterInputs'>
                                <Login loginError={this.state.loginError} getUsername={this.getUsername} getPassword={this.getPassword} userLogin={this.userLogin} status={this.state.status} />
                            </TabPanel>
                            <TabPanel className='loginRegisterInputs'>
                                <Register collectValues={this.collectValues} registerNewUser={this.registerNewUser} passwordError={this.state.passwordError} userExist={this.state.userExist} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;