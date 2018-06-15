import React from 'react';
import Header from '../../partials/header/Header';
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
            status: false
        }
        this.getPassword = this.getPassword.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.userLogin = this.userLogin.bind(this);
    }

    getUsername(username) {
        this.setState({
            username
        })
    }

    getPassword(password) {
        this.setState({
            password
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
            });

    }


    render() {
        return (
            <div className='home'>
                {/* <Header /> */}
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
                                <Login getUsername={this.getUsername} getPassword={this.getPassword} userLogin={this.userLogin} status={this.state.status} />
                            </TabPanel>
                            <TabPanel className='loginRegisterInputs'>
                                <Register />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;