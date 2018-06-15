import React from 'react';

class NewPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            warning: false,
        }
    }

    handleInput = (event) => {
        this.props.text(event.target.value);
    }

    render() {
        return (
            <div className='popUp'>
                <h3 >New post</h3>
                <p>Post content</p>
                <input type='text' onChange={this.handleInput} />
                {(this.props.textContent == "") ? <input type='button' value='POST' disabled /> : <input type='button' value='POST' onClick={this.props.createText} />}
            </div>
        )
    }
}

export default NewPost;