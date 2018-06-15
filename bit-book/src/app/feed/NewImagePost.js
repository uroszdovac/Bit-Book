import React from 'react';
import { validationImgUrl } from '../../shared/constants';


class NewImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            warning: false,
            isValid: true
        }
    }

    handleInput = (event) => {
        let input = event.target.value
        const isValid = validationImgUrl(event.target.value);
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


    render() {
        return (
            <div className='popUp' >
                <h3>New image post</h3>
                <p>Image link</p>
                <input type='text' onChange={this.handleInput} />
                {(this.state.warning) ? <p>Input must be youtube video url</p> : ''}
                <input type='button' value='POST' onClick={this.props.createImage} />
            </div>
        )
    }
}

export default NewImage;
