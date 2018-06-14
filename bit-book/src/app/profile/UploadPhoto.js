import React from 'react';
import image from '../../images/upload-photo.png';
import { validationImgUrl } from '../../shared/constants';

class UploadPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: "",
            isValid: true,
            error: ''
        }
        this.contentHandler = this.contentHandler.bind(this);
    }

    contentHandler(event) {
        this.setState({
            content: event.target.value
        })

        const isValid = validationImgUrl(event.target.value);

        if (!isValid) {
            this.setState({
                error: 'This input is invalid!'
            })
        } else {
            this.props.saveUrl(event.target.value);
            this.setState({
                error: ""
            })
        }
        this.setState({
            isValid
        })
    }


    render() {
        return (
            <div id="uploadPhoto">
                <div className="row">
                    <div className="col-6 title">
                        <h2>Upload photo</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="col-12">
                            <input type='text' className="textInput" value={this.state.content} placeholder="Enter the URL of the image you wish to upload" onChange={this.contentHandler} />
                        </div>
                        <div className="col-12 row">
                            <div className="col-6">
                                <input className="uploadPhotoButton" type="button" value="UPLOAD PHOTO" onClick={this.props.closeModal} />
                            </div>
                            <div className="col-6 error">
                                <span>{this.state.error}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="col-12">
                            <input type="file" />
                        </div>
                        <div className="col-6">
                            <input className="uploadPhotoButton" type="button" value="UPLOAD PHOTO" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 offset-10">
                        <input className="closeButton" type='button' value='CLOSE' onClick={this.props.closeModal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadPhoto;
