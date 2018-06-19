import React from 'react';

class CommentInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ""
        }

        this.contentHandler = this.contentHandler.bind(this);
        this.postComment = this.postComment.bind(this);
    }

    contentHandler(event) {
        this.setState({
            content: event.target.value
        })
        this.props.content(event.target.value)
    }

    clearInputField() {
        this.state.content = ""
    }

    postComment() {
        this.props.postComment();
        this.clearInputField();
    }
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <input onChange={this.contentHandler} value={this.state.content} id="input" type="text" placeholder="Add your comment" />
                </div>
                <div className="col-2 send">
                    {(this.state.content !== "") ? <input onClick={this.postComment} id="button" type="button" value="Send" /> : <input onClick={this.props.postComment} disabled id="button" type="button" value="Send" />}
                </div>
            </div>
        )
    }
}

export default CommentInput;