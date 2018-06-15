import React from 'react';
import Header from '../../partials/header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
                                <div>
                                    <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder="Your username" />
                                    <input className='col-12' type="password" id="loginPass" name="loginPass" placeholder="Your password" />
                                    <input className='col-12 loginButton' type="button" value="Log In" />
                                </div>
                            </TabPanel>
                            <TabPanel className='loginRegisterInputs'>

                                <input className='col-12' type="text" id="registerName" name="registerName" placeholder=" Full Name" />

                                <input className='col-12' type="email" id="registerEmail" name="registerEmail" placeholder=" Email Address" />

                                <input className='col-12' type="text" id="loginUsername" name="loginUsername" placeholder=" Username" />

                                <input className='col-12' type="password" id="registerPass" name="registerPass" placeholder=" Min 6 characters" />

                                <input className='col-12 registerButton' type="button" value="Register" />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;