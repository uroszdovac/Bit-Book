import React from 'react';

class NewVideo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            warning: false,
            // inputText: ''
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

            // this.setState({
            //     inputText: event.target.value
            // })
            this.props.videoUrl(output)

        } else {
            this.setState({
                warning: true
            })
        }
    }

    render() {
        return (
            <div className='popUp' >
                <h3>New video post</h3>
                <p>Youtube video link</p>
                <input type='text' onChange={this.handleInput} />
                {this.state.warning ? <p>Input must be youtube video url</p> : ''}
                <input type='button' value='POST' onClick={this.props.createVideo} />
            </div>
        )
    }
}

export default NewVideo;

