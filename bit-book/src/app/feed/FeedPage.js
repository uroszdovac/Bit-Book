import React from 'react';
import FeedList from './FeedList';
import Header from '../../partials/header/Header';
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
            console.log(posts)
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
                <Header />
                <FeedList posts={this.state.posts} />
                {/* <Sidebar /> */}

            </div>
        )
    }
}

export default Feed;