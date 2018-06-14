import React from 'react';
import FeedList from './FeedList';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';
import Sidebar from './Sidebar';
import NewPostButton from './NewPostButton';
import postServices from '../../services/postServices';

import NewVideoPost from './NewVideoPost';
import NewImagePost from './NewImagePost';
import NewTextPost from './NewPost';
import Modal from 'react-responsive-modal';

class Feed extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            popUp: '',
            open: false,
            videoContent: '',
            imageContent: '',
            textContent: '',
            postType: 'video image text'
        }

        this.onCloseModal = this.onCloseModal.bind(this)
        this.imagePopUp = this.imagePopUp.bind(this)
        this.videoPopUp = this.videoPopUp.bind(this)
        this.textPopUp = this.textPopUp.bind(this)
        this.newVideoContent = this.newVideoContent.bind(this)
        this.newImageContent = this.newImageContent.bind(this)
        this.newTextContent = this.newTextContent.bind(this)
        this.createVideoPost = this.createVideoPost.bind(this)
        this.createImagePost = this.createImagePost.bind(this)
        this.createTextPost = this.createTextPost.bind(this)
        this.filterPosts = this.filterPosts.bind(this)
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


    onCloseModal() {
        this.setState({
            open: false
        })
    }

    /**** pop ups ****/

    imagePopUp() {
        this.setState({
            popUp: 'image',
            open: true
        })
    }
    videoPopUp() {
        this.setState({
            popUp: 'video',
            open: true
        })
    }
    textPopUp() {
        this.setState({
            popUp: 'text',
            open: true
        })
    }

    /**** send video ****/

    newVideoContent(text) {
        this.setState({
            videoContent: text
        })
    }
    createVideoPost() {
        let newVideo = {
            videoUrl: this.state.videoContent
        }
        postServices.sendVideoPost(newVideo)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.loadPosts()
                }
            })
        this.onCloseModal()
    }

    /**** send text ****/

    newTextContent(text) {
        this.setState({
            textContent: text
        })
    }
    createTextPost() {
        let newText = {
            text: this.state.textContent
        }
        postServices.sendTextPost(newText)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.loadPosts()
                }
            })
        this.onCloseModal()
    }

    /**** send image ****/

    newImageContent(text) {
        this.setState({
            imageContent: text
        })
    }
    createImagePost() {
        let newImage = {
            imageUrl: this.state.imageContent
        }
        postServices.sendImagePost(newImage)
            .then(response => {
                if (response >= 200 && response < 300) {
                    this.loadPosts()
                }
            })
        this.onCloseModal()
    }


    filterPosts(type) {
        this.setState({
            postType: type
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div className='containter-fluid'>
                    <div className='row'>
                        <FeedList posts={this.state.posts} filterFeed={this.state.postType} />
                        <Sidebar type={this.filterPosts} />

                        <Modal open={this.state.open} onClose={this.onCloseModal} center>
                            {this.state.popUp === 'video' ? <NewVideoPost createVideo={this.createVideoPost} videoUrl={this.newVideoContent} /> : this.state.popUp === 'image' ? <NewImagePost imageUrl={this.newImageContent} createImage={this.createImagePost} /> : <NewTextPost createText={this.createTextPost} text={this.newTextContent} />}
                        </Modal>

                    </div>
                </div>
                <NewPostButton image={this.imagePopUp} video={this.videoPopUp} text={this.textPopUp} />
                <Footer />
            </div>
        )
    }
}

export default Feed;