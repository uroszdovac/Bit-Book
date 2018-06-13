import React from 'react';
import FeedList from './FeedList';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';
import Sidebar from './Sidebar';
import NewPostButton from './NewPostButton';
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
                <Header />
                <div className='containter-fluid'>
                    <div className='row'>
                        <FeedList posts={this.state.posts} />
                        <Sidebar />
                    </div>
                </div>
                <NewPostButton />
                <Footer />
            </div>
        )
    }
}

export default Feed;