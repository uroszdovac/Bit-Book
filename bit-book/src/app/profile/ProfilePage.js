import React from 'react';
import Header from '../../partials/header/Header.js';
import Footer from '../../partials/footer/Footer.js';
import userServices from '../../services/userServices';
import EditProfile from './EditProfile.js';
import Modal from 'react-responsive-modal';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {},
            openFirstModal: false,
            openSecondModal: false
        }

        this.onCloseFirstModal = this.onCloseFirstModal.bind(this);
        this.onOpenFirstModal = this.onOpenFirstModal.bind(this);
        this.onCloseSecondModal = this.onCloseSecondModal.bind(this);
        this.onOpenSecondModal = this.onOpenSecondModal.bind(this);

    }

    getMyProfile() {
        return userServices.getMyProfile()
            .then(profile => {
                this.setState({
                    profile
                })
            })
    }

    getProfile() {
        const id = this.props.match.params.id;

        console.log("ajdi " + id);


        return userServices.getUser(id)
            .then(profile => {
                this.setState({
                    profile
                })
            })
    }
    onOpenFirstModal = () => {
        this.setState({ openFirstModal: true });
    };

    onCloseFirstModal = () => {
        this.setState({ openFirstModal: false });
    };

    onOpenSecondModal = () => {
        this.setState({ openSecondModal: true });
    };

    onCloseSecondModal = () => {
        this.setState({ openSecondModal: false });
    };

    componentDidMount() {

        (this.props.match.params.id) ? this.getProfile() : this.getMyProfile();

    }

    render() {
        return (
            <div id="profile">
                <Header />
                <div className="container">
                    <img src={this.state.profile.avatar} alt="ProfileImage" />
                    <h2>{this.state.profile.name}</h2>
                    {console.log(this.props.match.params.id)
                    }
                    {(this.props.match.params.id) ? "" : <p id="editButton" onClick={this.onOpenFirstModal}>Edit profile</p>}
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
                <Modal open={this.state.openFirstModal} onClose={this.onCloseFirstModal} center>
                    <EditProfile />
                </Modal>
                <Footer />
            </div>
        )
    }
}

export default Profile;