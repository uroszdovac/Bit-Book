import React from 'react';
import { validationImgUrl } from '../../shared/constants';


class NewImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            warning: false,
            isValid: null
        }
    }

    handleInput = (event) => {
        let input = event.target.value
        const isValid = validationImgUrl(event.target.value);
        this.setState({
            isValid
        })

        if (isValid) {

            this.setState({
                warning: false
            })

            this.props.imageUrl(input)

        } else {
            this.setState({
                warning: true
            })
        }
    }

    handlerPost = (event) => {
        if (event.keyCode === 13) {
            this.props.createImage();
        }
    }


    render() {
        return (
            <div className='popUp' >
                <h3>New image post</h3>
                <p>Image link</p>
                <input type='text' onChange={this.handleInput} onKeyUp={this.handlerPost} autoFocus />
                {(this.state.warning) ? <p>Input must be valid image url</p> : ''}
                {(this.state.isValid && this.props.imageContent !== "") ? <input type='button' value='POST' onClick={this.props.createImage} /> : <input type='button' value='POST' disabled />}
            </div>
        )
    }
}

export default NewImage;
