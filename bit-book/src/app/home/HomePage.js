import React from 'react';
import Header from '../../partials/header/Header';
import Login from './Login';
import Register from './Register';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import authenticationService from '../../services/authenticationService'

class Home extends React.Component {
    constructor(props) {
        super(props)

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
                        <Tabs className='form animated bounceInLeft'>
                            <TabList className='loginRegister row'>
                                <Tab className='col-6'>Log In</Tab>
                                <Tab className='col-6'>Register</Tab>
                            </TabList>

                            <TabPanel className='loginRegisterInputs'>
                                <Login />
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