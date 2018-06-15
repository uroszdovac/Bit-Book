import React from 'react';
import Header from '../../partials/header/Header.js';
import Footer from '../../partials/footer/Footer.js';
import userServices from '../../services/userServices';
import EditProfile from './EditProfile.js';
import Loading from '../../partials/Loading';
import UploadPhoto from './UploadPhoto.js';
import Modal from 'react-responsive-modal';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            openFirstModal: false,
            openSecondModal: false,
            loading: true,
            fileImg: null
        }

        this.onCloseFirstModal = this.onCloseFirstModal.bind(this);
        this.onOpenFirstModal = this.onOpenFirstModal.bind(this);
        this.onCloseSecondModal = this.onCloseSecondModal.bind(this);
        this.onOpenSecondModal = this.onOpenSecondModal.bind(this);
        this.changeImgUrl = this.changeImgUrl.bind(this);
        this.getMyProfile = this.getMyProfile.bind(this);
        this.selectProfileImageHandler = this.selectProfileImageHandler.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);


    }

    getMyProfile() {
        return userServices.getMyProfile()
            .then(profile => {
                this.setState({
                    profile,
                    loading: false
                })
            })
    }

    getProfile() {
        const id = this.props.match.params.id;

        return userServices.getUser(id)
            .then(profile => {
                this.setState({
                    profile,
                    loading: false
                })
            })
    }
    onOpenFirstModal() {
        this.setState({ openFirstModal: true });
    };

    onCloseFirstModal() {
        this.setState({ openFirstModal: false });
    };

    onOpenSecondModal() {
        this.setState({ openSecondModal: true });
    };

    onCloseSecondModal() {
        this.setState({ openSecondModal: false });
    };

    changeImgUrl(imgUrl) {
        this.setState({
            imgUrl
        })
    }

    selectProfileImageHandler(event) {

        this.setState({
            fileImg: event.target.files[0]
        })

    }

    uploadPhoto() {

        const formData = new FormData();
        formData.append('file', this.state.fileImg);

        userServices.uploadImage(formData)
            .then(data => {
                this.setState({
                    imgUrl: data
                })
            })
        this.onCloseSecondModal()

    }

    componentDidMount() {

        (this.props.match.params.id) ? this.getProfile() : this.getMyProfile();

    }

    render() {
        return (
            <div id="profile">
                <Header />
                {(this.state.loading) ? <Loading /> : (
                    <div id="wrap" className="container">
                        <img src={this.state.profile.avatar} alt="ProfileImage" />
                        <h2>{this.state.profile.name}</h2>
                        {(this.props.match.params.id) ? "" : <p id="editButton" onClick={this.onOpenFirstModal}>Edit profile</p>}
                        <p>{this.state.profile.aboutShort}</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-3 offset-3">
                                    <div className="bar right">
                                        <div className="circle">
                                            <p>P</p>
                                        </div>
                                        <p>{this.state.profile.postsCount} posts</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="bar" >
                                        <div className="circle">
                                            <p>C</p>
                                        </div>
                                        <p>{this.state.profile.commentsCount} comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }

                <Modal open={this.state.openFirstModal} onClose={this.onCloseFirstModal} center>
                    <EditProfile openModal={this.onOpenSecondModal} closeModal={this.onCloseFirstModal} imgUrl={this.state.imgUrl} loadProfile={this.getMyProfile} profile={this.state.profile} />
                </Modal>
                <Modal open={this.state.openSecondModal} onClose={this.onCloseSecondModal} center>
                    <UploadPhoto closeModal={this.onCloseSecondModal} saveUrl={this.changeImgUrl} selectProfileImageHandler={this.selectProfileImageHandler} uploadPhoto={this.uploadPhoto} fileImg={this.state.fileImg} />
                </Modal>
                <Footer />
            </div>
        )
    }
}

export default Profile;