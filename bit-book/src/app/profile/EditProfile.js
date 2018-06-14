import React from 'react';
import image from '../../images/upload-photo.png';

class EditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
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
                        <img src={image} alt="image" />
                        <input type="button" value="UPLOAD PHOTO" onClick={this.props.openModal} />
                    </div>
                    <div className="col-8 name">
                        <h4>Name</h4>
                        <input type="text" placeholder="Put your full name" />
                    </div>
                    <div className="col-12 description">
                        <input type="text" placeholder="Put some text that describes you" />
                    </div>
                </div>
                <div className="row close-update">
                    <div className="col-2 offset-8">
                        <input type='button' value='CLOSE' onClick={this.props.closeModal} />
                    </div>
                    <div className="col-2">
                        <input type='button' value='UPDATE' />
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;
