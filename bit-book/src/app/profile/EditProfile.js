import React from 'react';
import image from '../../images/upload-photo.png';
import userServices from '../../services/userServices';

class EditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: image,
            name: "",
            description: ""
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        // this.uploadFileHandler = this.uploadFileHandler.bind(this);

    }

    nameHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    descriptionHandler(event) {
        this.setState({
            description: event.target.value
        })
    }

    updateProfile() {
        let newProfile = {
            avatarUrl: this.props.imgUrl,
            name: this.state.name,
            aboutShort: this.state.description,
            about: this.state.description,
            email: this.state.name

        }
        userServices.updateProfile(newProfile)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.props.loadProfile()
                }
            })
        this.props.closeModal();
    }


    render() {
        return (
            <div className="editProfile">
                <div className="row">
                    <div className="col-4 title">
                        <h2>Update profile</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 uploadPhoto">
                        {(this.props.imgUrl) ? <img src={this.props.imgUrl} alt="image" /> : <img src={this.state.img} alt="image" />}
                        <input type="button" value="CHANGE PHOTO" onClick={this.props.openModal} />
                    </div>
                    <div className="col-8 name">
                        <h4>Name</h4>
                        <input type="text" placeholder="Put your full name" onChange={this.nameHandler} />
                    </div>
                    <div className="col-12 description">
                        <input type="text" placeholder="Put some text that describes you" onChange={this.descriptionHandler} />
                    </div>
                </div>
                <div className="row close-update">
                    <div className="col-2 offset-8">
                        <input type='button' value='CLOSE' onClick={this.props.closeModal} />
                    </div>
                    <div className="col-2">
                        <input type='button' value='UPDATE' onClick={this.updateProfile} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;
