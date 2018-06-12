import React from 'react';
import postServices from '../../services/postServices';
import userServices from '../../services/userServices';
import Header from '../../partials/header/Header';
import FeedItem from './FeedItem';
import CommentInput from './CommentInput';
import CommentList from './CommentList';


class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            post: {}
        }
    }

    getValue(id, type) {
        if (type === "text") {
            return postServices.getTextPost(id).then(post => {
                this.setState({
                    post
                })
            })
        } else if (type === "image") {
            return postServices.getImagePost(id).then(post => {
                this.setState({
                    post
                })
            });
        }
        return postServices.getTextPost(id).then(post => {
            this.setState({
                post
            })
        });
    }

    loadComment() {
        const id = this.props.match.params.id;
        const type = this.props.match.params.type;

        return postServices.getComments(id).then(comments => {
            this.setState({
                comments
            })

        })
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const type = this.props.match.params.type;

        this.loadComment();
        this.getValue(id, type);
    }

    render() {
        return (
            <div>
                <Header />
                <FeedItem post={this.state.post} />
                {/* {/* <CommentInput /> */}
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default SingleFeedItem;