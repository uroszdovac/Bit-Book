import React from 'react';
import Header from '../../partials/header/Header.js';
import userServices from '../../services/userServices';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {}
        }
    }


    getMyProfile() {
        return userServices.getMyProfile()
            .then(profile => {
                this.setState({
                    profile
                })
            })
    }

    componentDidMount() {
        this.getMyProfile();
    }

    render() {
        return (
            <div id="profile">
                <Header />
                <div className="container">
                    <img src={this.state.profile.avatar} alt="ProfileImage" />
                    <h2>{this.state.profile.name}</h2>
                    <p>{this.state.profile.aboutShort}</p>
                    <div className="row">
                        <div className="col-3 offset-3">
                            <div className="details">
                                <span className="circle">P</span>
                                <span>{this.state.profile.postsCount} posts</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="details" >
                                <span className="circle">C</span>
                                <span>{this.state.profile.commentsCount} comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;