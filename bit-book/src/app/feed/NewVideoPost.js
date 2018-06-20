import React from 'react';

class NewVideo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            warning: null
        }
    }

    handleInput = (event) => {
        let input = event.target.value
        if (input.includes('https://www.youtube.com/watch?')) {
            this.setState({
                warning: false
            })

            let inputSplit = input.split('=');
            let output = 'https://www.youtube.com/embed/' + inputSplit[1];

            this.props.videoUrl(output)

        } else {
            this.setState({
                warning: true
            })
        }
    }

    handlerPost = (event) => {
        if (event.keyCode === 13) {
            this.props.createVideo();
        }
    }

    render() {
        return (
            <div className='popUp' >
                <h3>New video post</h3>
                <p>Youtube video link</p>
                <input type='text' onChange={this.handleInput} onKeyUp={this.handlerPost} autoFocus />
                {this.state.warning ? <p>Input must be youtube video url</p> : ''}
                {(!this.state.warning) ? <input type='button' value='POST' onClick={this.props.createVideo} /> : <input type='button' value='POST' disabled />}
            </div>
        )
    }
}

export default NewVideo;

