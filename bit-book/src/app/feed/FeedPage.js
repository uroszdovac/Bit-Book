import React from 'react';
import FeedList from './FeedList';
import postServices from '../../services/postServices';

class Feed extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

    }

    loadPosts() {
        return postServices.getPosts().then(posts => {
            this.setState({
                posts
            })
        })
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div>
                <FeedList posts={this.state.posts} />
                {/* <Sidebar /> */}

            </div>
        )
    }
}

export default Feed;