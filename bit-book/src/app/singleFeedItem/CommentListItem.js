import React from 'react';
import userServices from '../../services/userServices';

class CommentListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    getUser(id) {
        return userServices.getUser(id).then(user => {
            this.setState({
                user
            })
        })
    }
    componentDidMount() {
        this.getUser(this.props.authorId)
    }

    render() {
        return (
            <div className="row item comment" >
                <div className="col-2">
                    <img src={this.state.user.avatarUrl} alt="image" />
                    <h3>{this.state.user.name}</h3>
                </div>
                <div className="col-10 textItem">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )

    }

}

export default CommentListItem;