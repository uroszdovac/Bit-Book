import React from 'react';
import postServices from '../../services/postServices';
import userServices from '../../services/userServices';
import commentServices from '../../services/commentServices';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';
import FeedItem from './FeedItem';
import CommentInput from './CommentInput';
import NoComments from './NoComments';
import CommentList from './CommentList';


class SingleFeedItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            post: {},
            content: "",
            status: false
        }

        this.changeContent = this.changeContent.bind(this);
        this.makeComment = this.makeComment.bind(this);
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
        return postServices.getVideoPost(id).then(post => {
            this.setState({
                post
            })
        });
    }

    changeContent(text) {
        this.setState({
            content: text
        })
    }

    makeComment() {
        let newComment = {
            postId: this.props.match.params.id,
            body: this.state.content
        }
        commentServices.postComment(newComment)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.loadComment()
                }
            })

    }

    loadComment() {
        const id = this.props.match.params.id;
        const type = this.props.match.params.type;

        return commentServices.getComments(id).then(comments => {

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
            <div >
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <FeedItem post={this.state.post} />
                            <CommentInput postComment={this.makeComment} content={this.changeContent} />
                            {(this.state.comments.length === 0) ? <NoComments /> : <CommentList comments={this.state.comments} />}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SingleFeedItem;